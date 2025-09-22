const rabbitmq = require('./utils/rabbitmq');

async function processTask(task) {
  console.log('Processing task:', task);
  // Simulate task processing
  await new Promise(resolve => setTimeout(resolve, 2000));
  console.log('Task completed:', task);
}

async function consumeTasks() {
  try {
    const channel = await rabbitmq.createChannel();
    const queue = 'task_queue';

    await channel.assertQueue(queue, { durable: true });
    channel.prefetch(1);

    console.log(' [*] Waiting for messages in %s. To exit press CTRL+C', queue);

    channel.consume(queue, (msg) => {
      const task = JSON.parse(msg.content.toString());
      console.log(" [x] Received %s", msg.content.toString());
      processTask(task)
        .then(() => {
          console.log(" [x] Done");
          channel.ack(msg);
        });
    }, { noAck: false });

  } catch (error) {
    console.error('Error consuming tasks:', error);
  }
}

consumeTasks();
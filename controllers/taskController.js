const rabbitmq = require('../utils/rabbitmq');

exports.createTask = async (req, res) => {
  try {
    const task = req.body;
    const queue = 'task_queue';
    const channel = await rabbitmq.createChannel();

    await channel.assertQueue(queue, { durable: true });
    channel.sendToQueue(queue, Buffer.from(JSON.stringify(task)), { persistent: true });
    console.log(" [x] Sent '%s'", JSON.stringify(task));

    res.status(201).json({ message: 'Task enqueued successfully' });
  } catch (error) {
    console.error('Error creating task:', error);
    res.status(500).json({ error: 'Failed to enqueue task' });
  }
};
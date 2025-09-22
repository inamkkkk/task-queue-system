const amqp = require('amqplib');

const rabbitmqUrl = 'amqp://localhost'; // Replace with your RabbitMQ URL

let connection = null;

async function connect() {
  try {
    if (!connection) {
      connection = await amqp.connect(rabbitmqUrl);
      console.log('Connected to RabbitMQ');
    }
    return connection;
  } catch (error) {
    console.error('Error connecting to RabbitMQ:', error);
    throw error;
  }
}

async function createChannel() {
  try {
    if (!connection) {
      await connect();
    }
    const channel = await connection.createChannel();
    return channel;
  } catch (error) {
    console.error('Error creating channel:', error);
    throw error;
  }
}

module.exports = {
  connect,
  createChannel,
};
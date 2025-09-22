# Task Queue System with RabbitMQ

This project implements a simple task queue using Node.js and RabbitMQ.

## Prerequisites

*   Node.js
*   RabbitMQ

## Installation

1.  Clone the repository:
   
   git clone <repository_url>
   cd task-queue-system
   
2.  Install dependencies:
   
   npm install
   

## Configuration

Configure RabbitMQ connection details in `utils/rabbitmq.js`.

## Running the Application

1.  Start the worker (consumer):
   
   node worker.js
   
2.  Start the server (producer):
   
   node server.js
   

## API Endpoints

*   `POST /tasks`: Enqueue a new task.

## Example Usage

Send a POST request to `/tasks` with a JSON payload containing the task data:


{
  "task": "process_image",
  "data": {
    "image_url": "https://example.com/image.jpg"
  }
}


The worker will consume the task and process it.

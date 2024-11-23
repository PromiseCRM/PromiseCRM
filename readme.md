# PromiseCRM

PromiseCRM is a customer relationship management (CRM) system designed to help businesses manage their interactions with current and potential customers. It provides tools for managing customer data, tracking customer interactions, and automating various business processes.

## Getting Started

Follow these steps to set up and run PromiseCRM:

### Prerequisites

- Docker
- Docker Compose

### Installation

1. **Clone the repository:**
    ```bash
    git clone https://github.com/PromiseCRM/PromiseCRM.git
    cd PromiseCRM
    ```

2. **Start the database using Docker Compose:**
    ```bash
    docker-compose up -d
    ```

3. **Install dependencies:**
    ```bash
    npm install
    ```

4. **Run the application:**
    ```bash
    npm start
    ```

5. **Access the application:**
    Open your web browser and navigate to `http://localhost:3000`.

### Configuration

- The database configuration can be found and modified in the `docker-compose.yml` file.
- Additional configuration options are available in the `.env` file.

### Troubleshooting

- Ensure Docker and Docker Compose are installed and running.
- Check the logs for any errors:
  ```bash
  docker-compose logs
  ```

For more detailed documentation, please refer to the [official documentation](https://github.com/PromiseCRM/PromiseCRM/wiki).

## License

This project is licensed under the Apache 2.0 License - see the [LICENSE](https://github.com/PromiseCRM/PromiseCRM/blob/main/LICENSE) file for details.


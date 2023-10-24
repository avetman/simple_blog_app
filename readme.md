### Setting Up the Database

1. **Import Database Dump**:

   - Open a terminal or command prompt.
   - Navigate to the directory containing your MySQL dump file (`simple_blog_dump.sql`).
   - Run the following command to import the database:

     ```
     mysql -u your_username -p simple_blog < simple_blog_dump.sql
     ```

   - You'll be prompted for your MySQL password. Enter it and press Enter.

2. **Database Configuration**:

   - Update the database connection settings in `api_slim/app/dependencies.php` if necessary.


3. **How to RUn Project**:
    - composer install
    - use apache2 server to run backend api
    - client , run npm install , then npm run dev to start app
    



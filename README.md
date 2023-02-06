Guide to set up and run a ReactJS project: https://github.com/tuan304201/databoard

To set up and run the ReactJS project from tuan304201/databoard Github repository, you need to follow these steps:

1. Clone the repository to your local machine using the command: git clone https://github.com/tuan304201/databoard.git
2. In the project directory, run the command npm install to install the necessary dependencies for the project.
3. After installation, run the command npm start to run the project in development mode.
4. The browser will automatically open the page http://localhost:3000/ and you will see the project's interface displayed.

***** Note: You need to install NodeJS and npm before performing the above steps.
--------------------------------------------------------------------------------------------------------------------------------------------

*******  Interface displayed:

![image](https://user-images.githubusercontent.com/106050800/217055340-f3dfbd44-ad95-4d3a-879d-92506cca3218.png)

--------------------------------------------------------------------------------------------------------------------------------------------

*******  UseEffect function calls an API at 'https://randomuser.me/api/?results=100' and uses fetch to get data from the API. After the data is retrieved, it will be parsed into JSON and passed to the setUsers function to update the component's state.

![image](https://user-images.githubusercontent.com/106050800/217055911-fae68cb3-bdf4-4c6c-a054-87ca2ff0f884.png)

--------------------------------------------------------------------------------------------------------------------------------------------

******* fullName is a function to get and concatenate data into fullname from api, avatar is a function to get image from api.

![image](https://user-images.githubusercontent.com/106050800/217056806-bd3f3819-531d-4f4f-a799-2ea3fadcfb91.png)

--------------------------------------------------------------------------------------------------------------------------------------------

*******  I use Primereact library to display the data to the table.
* value: get data from state users.
* paginator: show pagination.
* paginatorTemplate: display the page switch of the table.
* currentPageReportTemplate: Display the data of the table.
* rows: the number of rows you want to display in a page.
* rowsPerPageOptions: option to display the number of users in a page.
* sortMode: sort data.
* field: get data from.
* sortable: add sort function.
* header: column header.

![image](https://user-images.githubusercontent.com/106050800/217057573-49e35cbd-68a8-4152-9bfe-a36da5f0d493.png)


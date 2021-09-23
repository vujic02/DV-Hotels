# DV Hotels

DV Hotels is a small project made by [Vujke](https://github.com/vujic02) and [DS360](https://github.com/shah1012)!
The project features fully functional Log in & Register functionality & dynamic routes for each hotel.  
Hope you like it :)

## Backend repo
- [Backend Repo](https://github.com/vujic02/DV-Hotels-Backend)
 
# Design 
### Home Page
![Home page](https://i.ibb.co/2dqsLzT/Home-Page-1.png)

### Authentication (Log in page)
![https://i.ibb.co/nr59qn1/AuthPage.png)

### Hotel Details (Dynamic route page)
![https://i.ibb.co/0KRP4nq/Hotel-Page.png)


### Figma Design: [DV-Hotels Design](https://www.figma.com/file/zmVbAf2WiDrGgjzInqbZFT/DV-Hotels-design)

# Possible Improvements
The project is, at the moment, unfinished, but it is very close to initial plan's finish.
Here are some of our the ideas for improvement:
  - Create loading functionality for each page that needs it.
  - Create functionality that allows the user to create a new hotel.
  - Create user's page to enable the user to see what hotels he/she added(could also add it through the navbar modal).
  - Build onto the Hotel Details page to enable user to actually reserve the viewed hotel and to finally checkout.

## Getting Started

First, run the development server:

```bash
npm start
# or
yarn start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Next step is to set up the backend.
Clone the backend repo: [Backend Repo](https://github.com/vujic02/DV-Hotels-Backend).

In root folder of the backend repository folder, create a .env file in which a variable for MongoDB is needed to be added.
```DATABASE_MONGODB = ```

Next step is to actually create a MongoDB Cluster which I'm not going to explain how to do here.
There is plenty of youtube tutorials on how to do it.

After the Cluster is created, create a collection and add the collection shell key to the .env variable.
It should look something like:
```DATABASE_MONGODB = mongodb+srv://<your_username>:<your_password>@cluster0.erpf0.mongodb.net/DatabaseName?retryWrites=true&w=majority```

That's it!
The project should be up & running completely.

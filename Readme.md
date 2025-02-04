# Real Estate Listings App

This is a Real Estate web application built using Node.js, Express, and EJS. The application allows users to view and list properties for sale. It provides a user-friendly interface for property owners to list their properties and for potential buyers to search and view property details.

## Project Structure

```
real-estate-listings-app/
├── 

package.json


├── public/
│   ├── src/
│   │   ├── input.css
│   │   ├── output.css
├── 

server.js


├── views/
│   ├── components/
│   │   ├── Layout/
│   │   │   ├── Footer.ejs
│   │   │   ├── Head.ejs
│   │   │   ├── Header.ejs
│   │   │   ├── HomepageSections/
│   │   │   │   ├── CallToAction.ejs
│   │   │   │   ├── FeaturedProperties.ejs
│   │   │   │   ├── Hero.ejs
│   │   │   │   ├── SearchProperties.ejs
│   │   │   ├── SellerPortalSections/
│   │   │   │   ├── AuthForm.ejs
│   ├── homepage.ejs
│   ├── sellerPortal.ejs

```

## Technologies Used

- **Node.js**
- **Express**
- **EJS (Embedded JavaScript)**
- **Tailwind CSS**: A utility-first CSS framework for rapidly building custom user interfaces.
- **DaisyUI**: A plugin for Tailwind CSS that provides a set of accessible and customizable UI components.

## Features

- **Property Listing**: Users can list their properties for sale by providing details such as title, description, size, and price.
- **Property Search**: Potential buyers can search for properties based on various criteria.
- **Responsive Design**: The application will be designed to be responsive and will work well on both desktop and mobile devices.

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/PREETOMGOGOI123/Real-Eastate-Lsiting-App.git
    cd real-estate-app
    ```

2. Install the dependencies:
    ```sh
    npm install
    ```

### Running the Application

1. To start the development server:
    ```sh
    npm run dev
    ```

2. Open your browser and navigate to `http://localhost:3000`.


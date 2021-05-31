# Octocat Search

Octocat Search is a repository ("repo") search app which uses the [Github repository search API](https://docs.github.com/en/rest/reference/search#search-repositories) to search the collection of public projects and match them to a user's queries

## Setup

To download and configure Octocat Search, please follow these steps in your terminal:

1. Clone this repo down locally: `git clone https://github.com/benhammondmusic/octocat-search/`
2. Enter the local repo: `cd octocat-search`
3. Install dependencies: `npm install`

## Run

To run Octocat Search: `npm start` (this will launch a browser and navigate to http://localhost:3000)

## Tests

To run the automated tests for Octocat Search: `npm test`

# Project Details

## Minimum Viable Product (MVP)

User Stories ("As A User"):

- AAU I want to enter search terms to find matching repos
- AAU I want to click "Search" to query GitHub and see a list displayed
- AAU I want to see matches ordered by GitHub's "best-matched" ranking by default
- AAU I want to optionally see matches ranked by their number of stars
- AAU I want to be able to view the results ordered either Best-to-Worst or Worst-to-Best
- AAU I want to be able to filter the search to only display results coded in a selected coding or markup language
- AAU I want to click on one of the displayed results to see a details page with more info including:
  - Repository name
  - Description
  - Number of stars
  - Language
  - Owner's name
- AAU I want to view this app on a variety of devices and screen widths in a responsive way

## Style Guide

- Bootstrap was used for a quick, attractive, consistent, and responsive design system
- To match the company website, this project uses "Helvetica Neue" font and "Hotel Engine Blue": #0159E1

## Resources

- [Create React App](https://github.com/facebook/create-react-app).

### `npm start`

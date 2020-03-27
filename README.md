## Inspiration
In response to Prompt 2 of the sustainability impact space, we decided to tackle the problem of food waste largely prevalent in developed countries. Globally, one-third of all food produced is wasted, and 63% of the food Canadians throw away could have been eaten. For the average Canadian household that amounts to 140 kilograms of wasted food per year – at a cost of more than $1,100 per year. For Canada as a whole, that amounts to almost 2.2 million tonnes of edible food wasted each year, costing Canadians in excess of $17 billion.

## What it does
From a user's perspective, Camera Chef can be used in 3 simple steps; the user uploads a clear image of their open fridge, confirms the items and quantity of which they wish to use, and chooses a recipe from the returned suggestions.

## To develop this user flow, the following steps were implemented:

Camera Chef accepts a user-uploaded image and uses Google's Cloud Vision API to identify and classify items in the image.
This list of items is then cross-referenced against a dataset of grocery items to avoid vague labeling and disregard non-food items.
The ingredients are then returned to the user as an editable list requiring quantity specification and item confirmation.
An HTTP request is made to Edamam's Recipe API, with the food items list from the previous step, passed in as a parameter. The API references a large database of recipes with common ingredients from a large variety of sources.
The response data is then parsed and structured to present to the user. The retained information includes the main image, link to the recipe, cook time, yield and nutritional information.
How we built it
We built the app with React.js, used Google's Cloud Vision API to identify food items and Edamam's Recipe API to return meal suggestions.

## Next Steps
We had faced challenges with the Google Cloud Vision API as the initial setup was new for many group members. The initial stages of image recognition also returned vague and often unrelated items (fruit, container, fridge). To combat this, we plan to add an additional recognition layer that trains the model to recognize consumer products and specific produce. This will allow us to narrow the image recognition for instances like "fruit" to "apple", and "bottle" to "barbeque sauce".

## Accomplishments
We made significant progress in tailoring Google's Cloud Vision API to meet our project needs as well as finding a reliable open-source recipe API. The user experience is also a highlight of the project as the logical flow is coherent and straight forward; ultimately accomplishing the goal of returning relevant recipes based on the ingredients a user already has.

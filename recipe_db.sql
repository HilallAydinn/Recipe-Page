CREATE DATABASE RECIPES_DB;
USE RECIPES_DB;

CREATE TABLE RECIPE (
    ID INT AUTO_INCREMENT NOT NULL,
    UNIQUE_CODE VARCHAR(10) PRIMARY KEY,
    TITLE VARCHAR(255) NOT NULL,
    INGREDIENTS TEXT NOT NULL,
    INSTRUCTIONS TEXT NOT NULL,
    CALORIES INT NOT NULL,
    CARBOHYDRATES DECIMAL(4, 1) NOT NULL,
    PROTEIN DECIMAL(4, 1) NOT NULL,
    FAT DECIMAL(4, 1) NOT NULL,
    CATEGORY VARCHAR(15) NOT NULL
);

INSERT INTO RECIPE (UNIQUE_CODE, TITLE, INGREDIENTS, INSTRUCTIONS, CALORIES, CARBOHYDRATES, PROTEIN, FAT, CATEGORY) VALUES
('BLB1', 'Blueberry Lemon Bread', '1/2 cup butter\n1 cup white sugar\njuice and zest of one lemon\n2 eggs\n11/2 cups flour\n1 teaspoon baking powder\n1 teaspoon salt\n1/2 cup milk\n1 cup blueberries','1. Preheat the oven to 350 degrees. Line a loaf pan with parchment paper.\n2. Cream the butter and sugar until fluffy. Mix in the lemon juice, lemon zest, and eggs.\n3. Stir in the flour, baking powder, salt, and milk until the batter is mixed. Gently fold in the blueberries.\n4. Pour batter into prepared pan. Bake for about one hour â€“ the top should be golden brown and spring back when you touch it.\n5. Let cool. Slice, slather on the butter with olive oil, and serve!', 216, 38, 3.8, 5.9, 'breakfast'),
('SP1', 'Swedish Pancakes', '3 eggs\n11/2 cups whole milk\n1 cup flour\n3 tablespoons melted butter\n1 tablespoon granulated sugar\n1/2 teaspoon salt\nFor Topping:\nlingonberry or blueberry jam\nplain yogurt\nwhipped cream', '1. Blend the eggs and milk until doubled in size, about 30 seconds. Add flour, melted butter, sugar, and salt; blend for another 15-20 seconds until combined.\n2. Preheat a nonstick or well seasoned cast iron pan over medium heat. Pour about 1/4 cup of pancake batter into the pan with one hand, and immediately tilt the pan with the other hand to spread the batter even wider. This will give you a signature thin lacy edge on your pancake.\n3. Let it sit for about 1 minute or until the pancake is golden brown; use a spatula to pull the edges up and flip the pancake. Cook for another 15-30 seconds on the back side. You can cook to your desired level of doneness.\n4. Serve them flat, folded, or rolled, topped with whatever you like: maple syrup, whipped cream, fruit, jams, etc.', 412, 48.4, 17.6, 16.2, 'breakfast'),
('RB1','Raspberry Bowl', '10 ounces frozen mangoes or peaches\n1 cup water\n10 ounces frozen raspberries\n1 cup light coconut milk\n1/3 cup chia seeds\n1/4 cup flaxmeal\n1/4 cup honey\na pinch of salt\nberries, granola, nuts, coconut, and cream for topping', '1. Soften the frozen fruit in the microwave or by leaving it out on the counter for a little while.\n2. Blend the peaches with the water. Blend the raspberries with the coconut milk.\n3. Combine the two fruit puree mixtures and stir in the chia seeds, flax, honey, and salt. Let stand for 10-15 minutes to thicken.\n4. Serve with toppings of your choice.', 325, 45.8, 6, 12.4, 'breakfast'),
('BP1','Breakfast Pizza', '1 batch of pizza crust\n1/2 cup kale pesto\n1/2 cup chopped sun dried tomatoes\n2 cups shredded Mozzarella cheese\n3–4 large eggs\nparsley and Parmesan for topping', '1. Prepare the pizza dough.\n2. Preheat the oven to 500 degrees, or the hottest temp your oven can handle.\n3. Divide into two pieces. Stretch one of the pieces into a 14-inch round pizza, coating with flour to prevent sticking. Transfer to a baking sheet, pizza pan, or baking stone. Freeze the other piece of dough for a future pizza.\n4. Spread the pizza with the kale pesto. Arrange the sun dried tomatoes in an even layer over the pesto and top with cheese. Make three or four small wells in the cheese to make room for the eggs. Crack the eggs and arrange them (raw) among the top cheese layer.\n5. Bake the pizza on the highest rack for 6-10 minutes, until the crust is baked, the cheese is melted and bubbly, and the eggs are cooked to your liking. Remove from oven, let it stand a few minutes, and cut into slices.', 490, 40, 23.2, 25.8, 'breakfast'),
('PEAT1','Poached Egg and Avocado Toast', '2 eggs\n2 slices whole grain bread\n1/3 avocado\n2 tablespoons shaved Parmesan cheese\nsalt and pepper for topping\nfresh herbs (parsley, thyme, or basil) for topping\nquartered heirloom tomatoes for serving', '1. Bring a pot of water to boil. Drop the metal rims of two mason jar lids into the pot so they are laying flat on the bottom. When the water is boiling, turn off the heat and carefully crack the eggs directly into each rim. Cover the pot and poach for 5 minutes.\n2. While the eggs are cooking, toast the bread and smash the avocado on each piece of toast. When the eggs are done, use a spatula to lift the eggs out of the water. Gently pull the rim off of the eggs and place the poached eggs on top of the toast. Sprinkle with Parmesan cheese, salt, pepper, and fresh herbs; serve with the fresh quartered heirloom tomatoes.', 393, 30.1, 23.3, 20.4, 'breakfast'),
('VQ1','Vegetable Quiche', '1 tablespoon butter \n1 shallot, minced\n2 cups veggies\n8 Eggs\n11/4 cup heavy cream\n1 cup Gouda Cheese\n1 teaspoon salt\n2 unbaked Pie Crust', '1. Melt the butter over medium high heat. Add veggies. Season with a pinch of salt.\n2. Whisk eggs and heavy cream together. Add cooked veggies, cheese, and salt.\n3. Press pie crust into a 10-inch pie pan and gently crimp the edges so they look nice.\n4. Preheat the oven to 350 degrees. Poke tiny holes in the bottom of the crust with a fork. Bake the pie crust for 10 minutes, until partially baked.\n5. Pour the egg and veggie mixture into the pie dish. Bake for 15 minutes.\n6. Remove pan from oven and cover the pie edges with a foil crown so the edges don’t overbrown. Bake for another 15 minutes.\n7. Slice and serve.', 288, 15.2, 9.2, 21.2, 'breakfast'),
-- ('Soba Noodle Salad', 'For the Sauce:\n5 tablespoons peanut butter\n5 tablespoons water\n5 tablespoons soy sauce\n2 tablespoons sesame oil\n2 tablespoons honey\njuice of 1 lime\n1 clove garlic\n1/4 cup chili sauce\n1/2 cup peanuts\n\nFor the Salad:\n1 lb. chicken breast\n1 red bell pepper\n3–4 cups chopped purple cabbage\n10 ounces soba noodles\n1/4 cup fresh cilantro or basil\n1/4 cup crushed peanuts for topping', '1. Puree sauce ingredients in a food processor or blender. Add the peanuts last so you can control how chunky it is.\n2. Cook the chicken in a skillet over medium high heat. Season with salt and pepper. When the chicken is cooked through, set aside until cool enough to handle and shred the meat.\n3. Chop the red pepper, cabbage, and cilantro to your desired size for the salad.\n4. Cook the noodles according to package directions.\n5. Toss everything together with enough dressing to generously coat everything. Serve hot or cold.', 344, 40.3, 24.7, 11.5, 'lunch'),
-- ('Winter Grain Bowl', '3 large golden or red beets, cubed\n3 medium sweet potatoes, cubed\nolive oil and salt for roasting\n1 cup wild rice, uncooked\n1/2 cup dried cherries\n8–10 cups of shredded kale\n3/4 cup crumbled goat cheese\n3/4 cup pistachios\n\nBalsamic Dressing:\n1/4 cup balsamic vinegar\n1 cup olive oil\n2 tablespoons mayonnaise\n1 teaspoon salt\n2 teaspoons Dijon mustard', '1. Preheat oven to 425 degrees. Toss beets and sweet potatoes in with a little bit of olive oil and salt. Spread on parchment-lined baking sheets. Roast for 30 minutes. Cook wild rice according the package directions.\n2. In a blender or food processor, blend dressing ingredients together until smooth.\n3. In a large bowl, combine beets, sweet potatoes, wild rice, and dried cherries. Toss with a little bit of dressing.\n4. o serve, scoop the pre-made wild rice salad onto a pile of kale. Top with goat cheese, pistachios, and extra dressing.', 529, 44.1, 9.2, 37.4, 'lunch'),
-- ('Broccoli Cheese Soup', '5 tablespoons butter, divided\n1 small onion, minced\n3 cloves garlic, minced\n1 cup broccoli stems, chopped\n1/4 cup all-purpose flour\n1 cup whole milk\n1 cup half and half\n21/2 cups chicken or vegetable broth\n2–3 cups broccoli florets, chopped into very small pieces\n1 large carrot, thinly sliced\n1 teaspoon salt\n1/2 teaspoon freshly ground black pepper\n1/2 teaspoon paprika\nan 8-ounce block of good quality extra-sharp cheddar cheese, grated', '1. In a large soup pot or Dutch oven, melt 1 tablespoon butter over medium heat. Add the onion, garlic, and broccoli stems; sauté until soft and fragrant, about 5 minutes.\n2. Add remaining 4 tablespoons butter to the soup pot. When butter is melted, add flour to the pot. Cook over medium heat for about 2-3 minutes, until flour is thickened. Slowly pour in the milk and half and half, whisking constantly. (It will start thick but eventually it will thin out and resemble a creamy soup base.) Continue to thin it out, gradually whisking in the broth. Simmer for 10 minutes or so, whisking occasionally to reincorporate the skin that may form.\n3. When the soup base is thickened nicely, stir in the broccoli, carrots, and spices. Simmer for 10 minutes or so, until the broccoli bits are bright green and fork-tender\n4. Transfer the pot off of heat and allow to cool slightly for a few minutes. Stir in most of the cheese until melted. Serve in bowls with a little extra cheese + a hunk of crusty bread for dunking.', 375, 16.2, 15.5, 28.6, 'lunch'),
-- ('Ramen', '1 tablespoon sesame oil\n3 teaspoons grated ginger\n4 teaspoons grated garlic\n4 cups broth\n4 cups water\n1 ounce dried shiitake mushrooms\n2 packages instant ramen\n1/2 cup chopped scallions or chives\n2 cup chopped kale\n1 cups shredded carrots\nSriracha to taste\ncrunchy golden panko crumbs for topping', '1. Heat the sesame oil in a large skillet over medium low heat. Add the garlic and ginger; stir fry for 2 minutes or until soft and fragrant.\n2. Add the broth and the water. Bring to a simmer; add the mushrooms and simmer for 10 minutes or until the mushrooms have softened and the broth is flavorful.\n3. Add the instant noodles to the hot liquid and simmer for an additional 5 minutes or until the noodles have softened. Add the scallions and stir to combine.\n4. Remove from heat, stir in the kale and carrots, and top with crunchy panko crumbs and a soft-boiled egg. Season with chili oil, hot sauce, sesame oil, and/or soy sauce and salt to taste.', 197, 28, 5.4, 7.7, 'lunch'),
-- ('Chicken Salad', 'Dressing;\n1/2 cup plain yogurt\n1/4 cup mayo\n1 tablespoon Dijon mustard\n2 teaspoons sugar\n3/4 teaspoon kosher salt\n3/4 teaspoon onion powder\n1/2 teaspoon garlic powder\n\nBase:\n21/2 cups cooked chicken, cubed or diced\n11/2 cups red grapes, sliced\n1 cup finely diced celery\n1 cup roasted cashew halves and pieces\nany extra seasonings you like', '1. Whisk the dressing ingredients until smooth.\n2. Toss your mix-ins (chicken, grapes, celery, and cashews) with as much of the dressing as you like.\n3. Taste, adjust, and zhuzh to your heart’s content.', 349, 12.8, 20.2, 24.7, 'lunch'),
-- ('Chickpea Salad', 'Salad:\ntwo 14-ounce cans chickpeas, drained and rinsed\n1/2 cup mayo \n2–4 tablespoons sriracha\nlemon juice, salt, and pepper to taste\n\nFor Serving:\ntoast or crackers\navocado\ngreens\neverything bagel seasoning', '1. Pulse the chickpeas through the food processor until chunky. Transfer to a bowl. \n2. Mix in the mayo and sriracha. Season with salt, pepper, and lemon juice.\n3. Serve on toast with avocado, greens, and everything bagel seasoning.', 263, 21.7, 7.7, 16.7, 'lunch'),
-- ('Chicken Wontons', '3 tablespoons sesame oil, divided\n14 ounces shiitake mushrooms, sliced\n1 clove garlic, grated\none 12-ounce bag frozen wontons\n1–2 cups chicken broth\n1/2 cup teriyaki sauce\n1–2 tablespoons chili crisp\n\nToppings:\ngreen onions, sliced\nsesame seeds', '1. Heat 1 tablespoon sesame oil in a large nonstick skillet over medium heat. Add mushrooms; sauté until softened and yummy. Add garlic for the last minute or two of sautéing.\n2. Add the frozen wontons, chicken broth, and teriyaki sauce. Simmer for 5 minutes, with a lid on, until the wontons are heated through.\n3. Finish with remaining 2 tablespoons sesame oil, chili crisp, and top with sesame seeds and scallions.', 410, 34.5, 21.5, 21.9, 'dinner'),
-- ('Salmon Tacos', '1 lb. salmon fillet\n2–3 teaspoons taco seasoning\n2 teaspoons avocado oil\n\nMango Corn Salsa:\n1 large mango, diced\n1 cucumber, diced\n2 ears sweet corn, kernels cut off the cob\n1/4 cup finely chopped red onion\n1/2 cup finely chopped cilantro\n1 tablespoon honey\nzest and juice of 1 lime\n1/2 teaspoon salt\n\nExtras:\none 14-ounce can refried beans, or regular black beans, or 2 avocados\n8 corn tortillas\n1/4 cup avocado oil for softening', '1. Preheat the oven to 425 degrees. Line a baking sheet with parchment paper.\n2. Toss the salmon with the taco seasoning and avocado oil until well-coated.\n3. Bake the salmon for 8 minutes, close to the top of the oven, or until it slips apart easily when pressed with a fork.\n4. While the salmon is baking, chop up your salsa ingredients and toss together in a bowl. Season to taste.\n5. To soften the corn tortillas, usually heat up some oil in a large skillet and then give the tortilla a very quick one-sided dip into the hot oil and transfer to a paper-towel lined plate. Stack them up so the heat and oil kind of distributes between all the tortillas.\n6. Mash avocado or spread refried beans on the bottom of the tortilla. Add a couple pieces of salmon; press to gently smash them. Top with a big scoop of the salsa. Finish these with lime squeezes and a drizzle of honey.', 600, 78.1, 38.7, 18.1, 'dinner'),
-- ('Vegan Burritos', 'Filling:\n2 sweet potatoes, chopped\n3 cups cauliflower walnut taco meat\n1 cup water\n\nVegan Queso:\n1 cup cashews\n1/2 cup water\none 4-ounce can green chiles\n1 chipotle pepper canned in adobo\n1/2 teaspoon kosher salt\n1–2 tablespoons of chipotle adobo sauce\n2–4 tablespoons nutritional yeast\n\nToppings:\n2 mashed avocados\n1/2 cup salsa\n2 tablespoons cilantro\n4 large flour tortillas\nVegan queso', '1. Start with your sweet potatoes in a skillet with a swish of oil and salt. Saute until fork-tender. Add prepared cauliflower walnut taco meat and just enough water to get it looking nice and saucy and taco-meaty.\n2. Blitz all of the ingredients for the vegan queso in a blender until smooth.\n3. Stuff a flour tortilla with mashed avocado, cauliflower walnut filling, salsa, cilantro, and queso.', 1067, 79.3, 28.3, 77.7, 'dinner'),
-- ('Zucchini Spaghetti', '1/2 pound of uncooked spaghetti\none 24-oz. jar of spaghetti sauce\n1 zucchini, cut into 1/4 inch-thick rounds (about 2–3 cups)\n1 egg\n1 cup panko breadcrumbs\n1/2 cup grated Parmesan cheese\n1 tablespoon lemon zest\n1 teaspoon salt and pepper to taste\n1 teaspoon Italian seasoning\n1/2 teaspoon garlic powder\n1/2 cup of some kind of cheese\n1/4 cup fresh basil leaves for topping', '1. Cook the spaghetti according to package directions. Drain and toss with sauce.\n2. Preheat the oven to 400 degrees. Beat the egg in a large bowl; add zucchini and toss to coat. Add panko, Parmesan, lemon zest, and spices. Toss to coat as much as possible. Transfer to a baking sheet – arrange the zucchini with some space between, and spoon the crispity crumbles on and around the zucchini. Drizzle with olive oil. Bake for 15-20 minutes until nice and golden brown.\n3. Remove pan from the oven. Sprinkle with your cheese of choice and return to bake or broil for a final 5 minutes. Top with fresh basil leaves, more olive oil, red pepper flakes, etc.\n4. Serve the spaghetti in deep pasta bowls topped with a scoop of cheesy crispy zucchini and more fresh basil.', 479, 73, 23.3, 9.9, 'dinner'),
-- ('Tofu Bowl', 'For the Bowl:\n2 blocks of extra firm tofu\n1–2 tablespoons cornstarch\n2 tablespoons olive oil\n1 teaspoon salt\n2 small head of broccoli, cut into florets\n2 red bell peppers, cut into strips\n11/2 cups uncooked white rice\n\nPeanut Sauce:\n1/2 cup peanut butter\n1/3 cup low-sodium soy sauce\n2 tablespoons sesame oil\n2 tablespoons rice vinegar\n2 tablespoons sambal oelek or chili paste\n2 tablespoons sugar, honey, or agave\n1-inch piece of fresh ginger, peeled\n1 clove fresh garlic, peeled\n1/4 cup water', '1. Press liquid out of the tofu. Cube tofu and toss (gently) with the cornstarch until coated. Arrange on a baking sheet lined with parchment. Arrange broccoli and peppers on another baking sheet. Drizzle all with olive oil and salt. Roast both pans at 425 degrees for 20-30 minutes, until tofu is slightly crisped and broccoli is roasty and delicious.\n2. While the tofu and broccoli are roasting, cook the rice.\n3. make the sauce by blending everything in a blender or food processor.\n4. Serve tofu and broccoli with rice and a good drizzle of peanut sauce.', 548, 63.4, 22.9, 25, 'dinner'),
-- ('Baked Salmon', 'For the Sheet Pan:\n1 lb. small gold potatoes, cut into bite-sized pieces\nolive oil + garlic powder, salt, and pepper\n2–3 cup of broccoli florets\n1–2 lb. salmon\n\nLemon Herb Sauce:\n6–8 tablespoons butter\n1–2 cloves garlic, minced\n1 shallot, minced\n2–3 sprigs of fresh thyme\n1/2 cup heavy cream\n1/2 cup chicken broth\njuice of 1 lemon\n2 tablespoon chopped fresh parsley or basil\nsalt and pepper to taste', '1. Preheat the oven to 400 degrees. Line a baking sheet with parchment. Add the potatoes to the pan and toss with a little bit of olive oil, garlic powder, salt, and pepper. Roast for 25 minutes until lightly browned and delicious.\n2. While the potatoes are roasting, make your sauce. Melt the butter over medium low heat. Add the garlic, shallot, and thyme sprigs; sauté for 3-5 minutes until soft and fragrant. Add broth and cream; bring to a low simmer. Let the sauce hang out over low heat until it starts to thicken enough to coat the back of a spoon. Remove the thyme sprigs. Whisk in the lemon juice, stir in the herbs, and season with salt and pepper.\n3. Add the broccoli and the salmon to the potato pan. Toss or brush with a little more oil, salt, and pepper. Bake for another 10-15 minutes, until the salmon is fully cooked.\n4. Serve salmon, potatoes, and broccoli with big spoonfuls of sauce, more herbs, and more lemon wedges.', 646, 25.5, 55.6, 37.4, 'dinner'),
-- ('Gingerbread Cookies', '3/4 cup unsalted butter, softened\n1 cup granulated sugar\n1 large egg\n1/3 cup molasses\n2 1/4 cup all-purpose flour (300 grams)\n2 teaspoons baking soda\n3/4 teaspoon salt\n1–2 teaspoons ground ginger\ngranulated sugar for rolling\n\nMaple Glaze:\n 1/2 tablespoon melted butter\n1/2 tablespoon pure maple syrup\n3/4 cup powdered sugar (180 grams)\n1 tablespoon milk\npinch of salt, to taste', '1. Preheat oven to 350 degrees.\n2. Cream butter and sugar in the bowl of a stand mixer until light and fluffy. Add egg and molasses; mix until incorporated.\n3. Add flour, baking soda, salt, and ginger. Mix until a soft dough forms.\n4. Scoop into small balls and roll in sugar. Bake for 9-11 minutes; remove from pan so the cookies can sink / flatten slightly as they cool.\n5. Whisk maple glaze ingredients together until smooth. Dip one side of the cooled cookies into the maple glaze, run the edge of the cookie along the side of the bowl to remove excess drips, set on a piece of wax paper, and add a few festive sprinkles before the glaze sets.', 176, 27.3, 1.6, 7, 'dessert'),
-- ('Cafe Latte Cake', 'Chocolate Cake:\n1 egg yolk\n1/4 cup vegetable oil\n1/4 cup sour cream or plain full-fat Greek yogurt\n1/3 cup granulated sugar\n1/2 cup flour\n2 tablespoons cocoa\n1/4 teaspoon salt\n1 teaspoon baking soda\n2–3 tablespoons strong hot coffee\n\nChocolate Frosting:\n2 tablespoons milk\n1/4 cup sugar\n2 tablespoons butter\n1/2 cup chocolate chips\n1 tablespoon coffee\n\nToppings:\nCaramel\nToasted or candied pecan pieces', '1. Preheat the oven to 350 degrees.\n2. Whisk all the cake ingredients into a batter, using the coffee to thin it out. Generously grease four 8-ounce ramekins with cooking spray. Divide batter between the ramekins and spread into the dishes so it covers the bottom.\n3. Bake for 15-20 minutes. Remove the cakes gently from the ramekins and allow to cool for at least 20 minutes before adding frosting.\n4. In a small saucepan, bring the milk, sugar, and butter to a boil. After 15-20 seconds of boiling, remove from heat and melt in chocolate chips. Whisk until smooth. Add coffee to thin slightly, whisking to get it smooth and shiny. Allow to cool for a few minutes so the frosting isn’t quite so runny.\n5. With this recipe, you can either make one 3-layer cake or two 2-layer cakes. Layer cake, frosting, pecans, caramel, and repeat until you have your nice decadent, over-the-top cake.\n6. Eat the cake while warm or store in the fridge for a day or two.', 529, 61.8, 5.5, 31.8, 'dessert'),
-- ('Raspberry Bars', 'Raspberry Filling:\ntwo 12-ounce bags of frozen raspberries\n1/2 cup granulated sugar\n2 tablespoons flour\n1 tablespoon cornstarch\njuice of one lemon\n\nCrumble Layer:\n3 cups rolled oats\n3 cups flour\n2 cups brown sugar\n1 teaspoon baking powder\n1 1/2 cups melted butter\n1/2 teaspoon salt', '1. preheat the oven to 350 degrees. Place raspberries in a large colander. Run warm water over them for a minute, and then let the liquid drain out for about an hour until softened and thoroughly drained. Mix raspberries with sugar, flour, cornstarch, and lemon juice.\n2. Mix the oats, flour, sugar, baking powder, butter, and salt together into a crumble-like mixture. Press two thirds of the crumble into the bottom of a 9×13 pan lined with parchment paper. Bake for 10 minutes.\n3. Arrange the raspberry layer on top of the baked bottom layer. Sprinkle with remaining crumble. Bake for another 25-30 minutes.\n4. Remove from oven. They will need a little time to set up into “bar” formation, so chill them for a few hours to get them really solid.', 376, 52.9, 4.7, 15.8, 'dessert'),
-- ('Lemon Pie', 'dessert'),
-- ('Blueberry Cake', 'dessert'),
-- ('Carrot Cake Bites', 'dessert');
DROP TABLE recipe;
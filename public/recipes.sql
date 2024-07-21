CREATE DATABASE recipes_db

CREATE TABLE recipes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    img TEXT NOT NULL,
    ingredients TEXT NOT NULL,
    instructions TEXT NOT NULL,
    category VARCHAR(50) NOT NULL
);

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(50) NOT NULL
);

INSERT INTO recipes (title, img, ingredients, instructions, category)
VALUES
("Cheese Omelette", "https://images.immediate.co.uk/production/volatile/sites/30/2024/01/Cheese-omelette-45155e3.jpg?quality=90&webp=true&resize=600,400", "2 eggs;½ tbsp olive oil;1 tbsp butter;15g mature cheddar, finely grated", "Crack the eggs into a jug and whisk well with a fork. Season with a pinch of salt.;Heat the oil and butter in a medium non-stick frying pan over a medium-low heat. Once the butter has started to foam, pour in the eggs and tilt to cover the base of the pan. Using a spatula, gently draw in the eggs from four points so there are folds in the centre. Do this once or twice, then leave the eggs to cook gently for 2-3 mins, until there's a little raw egg still in the middle. Sprinkle over the cheese and, using your spatula, gently fold the omelette in half. Switch off the heat and let the residual heat from the pan melt the cheese for 1 min. Slide onto your plate and sprinkle over some black pepper to serve.", "breakfast"),
("Pain Au Chocolat", "https://images.immediate.co.uk/production/volatile/sites/30/2024/06/PainAuChoc-0ff983a.jpg?quality=90&webp=true&resize=600,400", "420g plain flour;8g sea salt;60g caster sugar;220g unsalted butter (at least 82% fat works best), 20g softened;20g fresh yeast, or 10g dried yeast;1 egg, beaten;110ml whole milk;16 dark chocolate batons", "Make the dough in a stand mixer. Combine the flour, salt, sugar and 20g softened butter. Dissolve the yeast in around 80ml tepid water, around 38C, not too hot or it will kill the yeast. Add 20g of beaten egg and the milk to the stand mixer bowl. Pour in the yeast-water mixture and turn on to a low speed with a dough hook attachment for approximately 5 mins until the dough comes together to form a rough ball. Increase the speed to medium-high and knead for a further 6-10 mins until the dough is smooth. The exact time will depend on your stand mixer.;Wrap the dough tightly and rest at room temperature for 10 mins. Unwrap and roll out the dough into a rectangle around 4mm thick, about 40 x 30cm. Wrap the dough rectangle and put in the freezer for 1 hr to rest or in the fridge overnight.;Meanwhile, on a sheet of baking parchment, shape the remaining 200g butter into a flat rectangle (about 20 x 30cm) using a rolling pin. It should be around half the length of your dough rectangle, but the same width. Put in the fridge until needed - you want it to be cold but flexible.;Take the chilled dough out of the fridge or freezer and lay the butter in the centre. Fold the dough edges in to meet at the centre, covering the butter. Rotate the dough 90 degrees and roll it out to about 40cm in length, keeping the same width. Handle the dough gently and return it to the fridge for 10-20 mins if it starts getting too warm.;Repeat the process of folding the edges of the dough into the middle, then fold it over on itself again like a book (this is known as a double turn). Chill for 30 mins.;Rotate the dough 90 degrees again. Roll it out long again and fold the edges in to meet in the middle. Chill for a further 30 mins.;Roll out the dough to 32 x 30cm and cut 8 rectangles, 8 x 15cm each. Put a chocolate baton on one long edge of each rectangle, fold the dough inwards, then put the second chocolate baton next to the folded dough and roll the dough around the encase the chocolate, with the seams of the dough now facing down.;Prove the pain au chocolat at 26-29°C (this is really important as proving at any higher temperature will mean the butter between the layers melts) for around 2-3 hrs, until doubled in size.;Heat the oven to 175C/155C fan/gas 4, brush the pain au chocolat with the remaining egg and bake for 15-18 mins until golden brown and cooked through. Best eaten on the day but will keep in an airtight container for two days.", "breakfast"),
("Frittata Egg Muffins", "https://www.recipetineats.com/tachyon/2018/02/Healthy-Egg-Muffins_8.jpg?resize=600,400", "6 eggs;½ tsp salt;¼ tsp black pepper;3/4 cup chopped spinach;1/2 cup diced red capsicum / bell pepper;8 cherry tomatoes , quartered;½ cup shallots , finely sliced;70 g / 2.5 oz feta , crumbled (about 1/2 cup);Oil spray , for greasing muffin tin", "Preheat oven to 180C/350F.;Spray 6 standard non stick muffin holes with oil.;Whisk eggs, salt and pepper. Stir through vegetables and feta;Divide mixture between holes.;Bake 20 minutes or until the top is light golden and the centre springs back when touched.;Serve immediately. Or allow to cool, then store in an airtight container in the fridge for 3 - 4 days, or freezer for 3 months (defrost 2 minutes in the microwave or overnight in the fridge).", "breakfast"),
("Tortilla Breakfast Wrap", "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2020/10/14/0/FNK_TORTILLA_BREAKFAST_WRAP_H_f_s4x3.jpg.rend.hgtvcom.1280.720.suffix/1602696910893.jpeg", "2 large eggs;Kosher salt and freshly ground black pepper;1 tablespoon unsalted butter;One 8-inch whole-wheat tortilla;1/3 cup lightly packed baby spinach;2 slices American cheese;2 thin slices deli Black Forest ham", "Combine the eggs with a pinch of salt and several grinds of pepper in a small bowl and whisk to combine.;Melt the butter in a medium nonstick skillet over medium heat. Pour in the egg mixture and swirl the skillet to coat the bottom. Working quickly, dip the tortilla in the eggs, then flip it over and place it back in the skillet (both sides should be coated in egg). Season with another pinch of salt.;Continue to cook the eggs until they are completely set on the bottom, 1 to 2 minutes. Slide a large rubber or silicone spatula under the tortilla and flip the whole tortilla and egg over in one single motion. Scatter the spinach on the half of the tortilla that's closest to you, then top with the cheese and finally the ham. Continue to cook until the bottom is golden brown, about 1 minute more. Remove from the heat and slide onto a plate.;Starting with the side that has all the filling, start rolling the tortilla into a tight wrap or burrito. Keep the seam side facing downward so the wrap stays closed. Cut in half crosswise and serve.", "breakfast"),
("Menemen", "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2021/12/16/0/2108115_FN_Turkish-scrambled-eggs-and-tomatoes_4x3_v1_H.JPG.rend.hgtvcom.826.620.suffix/1639674220787.jpeg", "2 tablespoons olive oil;1 Italian sweet pepper, such as cubanelle, diced;4 large tomatoes (about 1 1/2 pounds), diced;3 large eggs;Kosher salt and freshly ground black pepper;1/4 cup fresh parsley, chopped, optional;Warm bread, for serving", "Heat the olive oil in a large pan over medium heat. Saute the sweet pepper, stirring frequently, until it softens, about 5 minutes. Add the tomatoes and cook, stirring occasionally, until they start breaking down and releasing their juices, 5 to 8 minutes.;Break the eggs into a small bowl and beat lightly using a fork. Add the eggs to the tomatoes and stir to combine. Add 1/2 teaspoon salt and about 1/3 teaspoon black pepper. Cook, gently stirring, until the eggs are just set, about 3 minutes, making sure not to overcook the eggs. Garnish with parsley if using and serve with warm bread.", "breakfast"),
("French Toast", "https://hips.hearstapps.com/hmg-prod/images/how-to-make-french-toast-1589827448.jpg?crop=0.731xw:0.488xh;0.0901xw,0.323xh&resize=1200:*", "6 large eggs;1 1/2 c. whole milk;1 1/2 tsp. ground cinnamon;1 1/2 tsp. pure vanilla extract;8 1-inch-thick slices challah bread;4 Tbsp. unsalted butter;Yoghurt, berries, and pure maple syrup or honey, for serving", "In large, shallow bowl, whisk together eggs, milk, cinnamon, and vanilla.;Working in batches, place 2 bread slices in egg mixture and let soak 2 minutes. Flip and soak 1 minute more (both sides of bread should be totally coated in mixture).;Meanwhile, heat 1 tablespoon butter in large nonstick skillet on medium-low. Once melted, add soaked bread and cook until golden brown, 1 to 3 minutes per side; transfer to wire rack. While toast is cooking, soak next batch of challah slices.;Repeat with remaining butter and bread. Serve topped with yogurt, berries, and syrup or honey if desired.", "breakfast"),
("Crispy Shredded Chicken", "https://images.immediate.co.uk/production/volatile/sites/30/2023/09/Crispy-shredded-chicken-cb41b41.jpg?quality=90&webp=true&resize=600,400", "320g pack chicken mini breast fillets;2½ tbsp light soy sauce;vegetable oil, for frying;1 red pepper, deseeded and thinly sliced;1 green pepper, deseeded and thinly sliced;3 tbsp cornflour;3 tbsp sweet chilli sauce;1 tbsp garlic and ginger paste;1 tbsp sesame oil;2 spring onions, trimmed and finely sliced", "Slice the chicken into thin strips. Pour over 2 tbsp of the soy and marinate in the fridge, covered, for 1 hr.;Meanwhile, heat 1 tbsp of the oil in a wok or deep frying pan over a medium heat and cook the peppers for 3-4 mins until just beginning to soften. Remove with a slotted spoon and set aside.;Spread the cornflour out in a shallow bowl. Season, then add the marinated chicken strips and toss to coat well.;Fill a wok or deep frying pan with the oil so it's about ½cm deep, then heat to medium-high. Carefully add the chicken in batches, cooking for 3-4 mins, using tongs to turn regularly until golden and crispy. Remove with a slotted spoon and place on a plate lined with kitchen paper to drain.;Mix together the remaining soy, sweet chilli, garlic paste and sesame oil in a large bowl. Add the cooked peppers, crispy chicken and toss together until coated all over and sticky. Serve sprinkled with the spring onions.", "lunch"),
("Caesar Salad", "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/perfect-caesar-salad-b18f1cb.jpg?quality=90&webp=true&resize=600,400", "225g day-old rustic Italian bread, crusts discarded and bread torn into bite-sized pieces;10 anchovy fillets, plus extra to serve;60ml red wine vinegar;3 tbsp Dijon mustard;2 garlic cloves;1 large egg;240ml vegetable oil;30g grated Parmigiano-Reggiano, plus extra shaved to serve;4 Little Gem lettuces, leaves separated and chilled", "Heat oven to 200C/180C fan/gas 6. Spread the bread out on a baking tray and bake for about 12 mins until golden and crisp, then leave to cool.;Meanwhile, in a food processor, combine the 10 anchovy fillets with the vinegar, mustard and garlic, and purée until smooth. Add the egg and pulse until just incorporated. With the machine on, gradually drizzle in the vegetable oil until it emulsifies to create a creamy dressing. Scrape the dressing into a bowl and stir in the cheese. Season, cover with cling film and put in the fridge until well chilled and thickened, at least 30 mins.;In a very large bowl, toss the chilled lettuce leaves with half the dressing, gently rubbing the dressing onto the leaves with your hands. (Save the remaining dressing for another salad or to serve with grilled chicken.) Divide the dressed lettuce between chilled bowls and scatter the croutons on top. Garnish with anchovy fillets and serve right away, passing round the extra cheese at the table.", "lunch"),
("Stuffed Peppers", "https://hips.hearstapps.com/hmg-prod/images/stuffed-peppers-lead-649c91e2c4e39.jpg?resize=980:*", "1/2 c. uncooked white or brown rice;2 Tbsp. extra-virgin olive oil, plus more for drizzling;1 medium yellow onion, chopped;3 cloves garlic, finely chopped;2 Tbsp. tomato paste;1 lb. ground beef;1 (14.5-oz.) can diced tomatoes;1 1/2 tsp. dried oregano;Kosher salt;Freshly ground black pepper;6 bell peppers, tops and cores removed;1 c. shredded Monterey jack;Chopped fresh parsley, for serving", "Preheat oven to 400°. In a small saucepan, prepare rice according to package instructions.;Meanwhile, in a large skillet over medium heat, heat oil. Cook onion, stirring occasionally, until softened, about 7 minutes. Stir in garlic and tomato paste and cook, stirring, until fragrant, about 1 minute more. Add ground beef and cook, breaking up meat with a wooden spoon, until no longer pink, about 6 minutes. Drain excess fat.;Stir in rice and diced tomatoes; season with oregano, salt, and pepper. Let simmer, stirring occasionally, until liquid has reduced slightly, about 5 minutes.;Arrange peppers cut side up in a 13'x9' baking dish and drizzle with oil. Spoon beef mixture into each pepper. Top with cheese, then cover baking dish with foil.;Bake peppers until tender, about 35 minutes. Uncover and continue to bake until cheese is bubbly, about 10 minutes more.;Top with parsley before serving.", "lunch"),
("Chicken Pesto Wraps", "https://thetimesweekly.com/wp-content/uploads/2024/04/Chicken-Pesto-Wraps_EXPS_FT23_30164_ST_5_22_1.jpg", "1/2 pound ground chicken;1 tablespoon canola oil;1/4 cup sun-dried tomato pesto;2 flour tortillas (8 inches), warmed;1/2 cup shredded part-skim mozzarella cheese;8 grape tomatoes, cut in half;2 slices red onion, separated into rings;1 cup shredded lettuce", "In a large skillet, cook chicken in oil over medium heat for 5-6 minutes or until no longer pink; drain.;In a small bowl, combine the chicken and pesto. Spoon chicken mixture over each tortilla; layer with cheese, tomatoes, onion and lettuce; roll up.", "lunch"),
("Pesto Quinoa Salad", "https://salu-salo.com/wp-content/uploads/2014/05/Quinoa-Salad-with-Bocconcini-3.jpg", "2/3 cup water;1/3 cup quinoa, rinsed;2 tablespoons prepared pesto;1 tablespoon finely chopped sweet onion;1 tablespoon olive oil;1 teaspoon balsamic vinegar;1/4 teaspoon salt;1 medium sweet red pepper, chopped;1 cup cherry tomatoes, quartered;2/3 cup fresh mozzarella cheese pearls (about 4 ounces);2 tablespoons minced fresh basil, optional", "In a small saucepan, bring water to a boil; stir in quinoa. Reduce heat; simmer, covered, until liquid is absorbed, 10-12 minutes. Cool slightly.;Mix pesto, onion, oil, vinegar and salt; stir in pepper, tomatoes, cheese and quinoa. Refrigerate, covered, to allow flavors to blend, 1-2 hours. If desired, stir in basil.", "lunch"),
("Pesto Spinach Penne", "https://images.immediate.co.uk/production/volatile/sites/30/2023/12/Pesto-spinach-penne-9942b45.jpg?quality=90&webp=true&resize=600,400", "400g wholemeal penne;5 tbsp vegetarian basil pesto;500g baby spinach, roughly chopped;220g cherry tomatoes, halved", "Cook the penne following pack instructions. Meanwhile, heat 4 tbsp of the pesto in a non-stick pan over a medium-low heat. Add the spinach and 2 tbsp water, then cover to wilt.;Drain the pasta and toss with the spinach, the rest of the pesto and the tomatoes. Serve half. Cool and chill the rest. Will keep chilled for three days. Reheat with a splash of water.", "lunch"),
("Chicken Wontons", "https://pinchofyum.com/wp-content/uploads/Chicken-Wontons-1-960x1437.jpg", "3 tablespoons sesame oil, divided;14 ounces shiitake mushrooms, sliced;1 clove garlic, grated;one 12-ounce bag frozen wontons;1-2 cups chicken broth;1/2 cup teriyaki sauce;1-2 tablespoons chili crisp;green onions, sliced;sesame seeds", "Heat 1 tablespoon sesame oil in a large nonstick skillet over medium heat. Add mushrooms; sauté until softened and yummy. Add garlic for the last minute or two of sautéing.;Add the frozen wontons, chicken broth, and teriyaki sauce. Simmer for 5 minutes, with a lid on, until the wontons are heated through.;Finish with remaining 2 tablespoons sesame oil, chili crisp, and top with sesame seeds and scallions.", "dinner"),
("Piri-piri Chicken", "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/piri-piri-chicken-with-smashed-sweet-potatoes-broccoli-84cb220.jpg?quality=90&webp=true&resize=440,400", "3 large sweet potatoes (about 900g), peeled and cut into large chunks;oil, for drizzling;6-8 chicken thighs, skin left on;2 red onions, cut into wedges;25g sachet piri-piri spice mix;300g long-stem broccoli", "Heat the oven to 180C/160C fan/gas 4. Toss the sweet potatoes with a generous drizzle of oil and some seasoning, and tip into a very large roasting tin. Push the potatoes to one end of the tin, then, in the other end, toss the chicken with the onions, spice mix, a drizzle of oil and some seasoning. Roast for 40 mins, stirring everything halfway through. Add the broccoli to the tin, drizzle with a little oil and season, then roast for 10-15 mins more.;Remove the chicken, onions and broccoli from the tin. Roughly mash the potatoes using a fork, making sure you incorporate all the chicken juices and spices from the pan. Spread the mash over the base of the tin, then top with the broccoli, chicken and onions and serve from the tin in the middle of the table.", "dinner"),
("Chicken Enchiladas", "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2016/9/22/0/FNK_Shortcut-Chicken-Enchiladas_s4x3.jpg.rend.hgtvcom.826.620.suffix/1474588972138.jpeg", "One 15-ounce can refried beans (about 1 cup);1/2 teaspoon dried oregano;12 ounces (3 cups) shredded Monterey Jack cheese;1/2 rotisserie chicken, meat shredded (about 2 1/4 cups), bones and skin discarded;Freshly ground black pepper;One 16-ounce jar medium-spicy tomato salsa;Twelve 6-inch corn tortillas;Sour cream and pickled jalapenos, for serving", "Preheat the oven to 375 degrees F. Stir together the beans, oregano and 1 cup cheese in a bowl. Add the chicken, season with pepper and stir until evenly combined.;Stir the salsa together with 1 cup water in a bowl, then transfer 1 cup to cover the bottom of a 9-by-13-inch baking dish. Stack the tortillas, wrap them in damp paper towels and microwave until warm and pliable, about 15 seconds.;Arrange the tortillas on a workspace, then divide the chicken filling among the tortillas (about 1/4-cup filling per tortilla). Roll the tortillas up like a cigar, then transfer them to the baking dish seam-side down, positioning the rolls so that the dish is filled evenly. Press the rolls gently with your hands so they begin to soak the sauce up. Pour the remaining salsa mixture over the rolled tortillas, then sprinkle with the remaining 2 cups cheese.;Bake the enchiladas until the cheese melts and the enchiladas are hot in the center, about 30 minutes. Serve hot with sour cream and pickled jalapenos.", "dinner"),
("Pomegranate Salmon", "https://images.immediate.co.uk/production/volatile/sites/30/2023/01/Pomegranate-salmon-d53eae4.jpg?quality=90&webp=true&resize=600,400", "4 salmon fillets;2 tbsp pomegranate molasses;1 tbsp olive oil;½ lime, juiced;1 pomegranate, seeds only;½ small bunch of parsley, finely chopped;4 mint leaves, finely chopped;1 small red onion, finely chopped;couscous and steamed green veg, to serve", "Put the salmon skin-side down on a large baking sheet. Mix the pomegranate molasses, ½ tbsp olive oil and half the lime juice with a good pinch of salt and a few grinds of black pepper in a small bowl, then brush the mixture all over the flesh of the salmon. Chill for at least 20 mins, or overnight if you can.;Heat the oven to 200C/180C fan/gas 6. Mix the pomegranate seeds with the parsley, mint, red onion, remaining lime juice and olive oil in a bowl, and set aside.;Roast the salmon, uncovered, for 10-12 mins, until cooked through. You can check this by poking a knife into the fillet and ensuring the fish flakes easily. Top the salmon with the salsa, and serve with couscous or steamed green veg, if you like.", "dinner"),
("Ramen Noodle", "https://s23209.pcdn.co/wp-content/uploads/2019/04/Quick-Ramen-Noodle-Stir-FryIMG_9087-360x360.jpg", "2 3.5-ounce packages instant ramen noodles, flavor packets discarded;⅓ cup beef stock;¼ cup oyster sauce;1 tablespoon rice wine vinegar;1 teaspoon Sriracha, or more, to taste;1 tablespoon toasted sesame oil;1 pound lean ground beef;1 cup diced sweet onion;3 cloves garlic, minced;1 tablespoon freshly grated ginger;2 green onions, thinly sliced;½ teaspoon toasted sesame seeds", "In a large pot of boiling water, cook ramen noodles until tender, about 3-4 minutes; rinse with cold water and drain well.;In a medium bowl, whisk together beef stock, oyster sauce, rice wine vinegar and Sriracha.;Heat sesame oil in a large skillet over medium heat. Add ground beef and onion, and cook until beef has browned, about 3-5 minutes, making sure to crumble the beef as it cooks; drain excess fat.;Stir in garlic and ginger until fragrant, about 1 minute.;Stir in beef stock mixture, scraping any browned bits from the bottom of the skillet.;Stir in ramen noodles until heated through and evenly coated in sauce, about 1-2 minutes.;Serve immediately, garnished with green onions and sesame seeds, if desired.", "dinner"),
("Cauliflower Orange Gnocchi", "https://pinchofyum.com/wp-content/uploads/Cauliflower-Gnocchi-3-960x1440.jpg", "1 package gnocchi;2-3 tablespoons unsalted butter;a medium-large head of cauliflower, cored and thinly sliced into bite-sized pieces on a mandoline (about 3 cups);2 shallots, minced (about 1/3 cup);1/4 - 1/2 cup heavy cream;1/2 - 1 teaspoons red pepper flakes;1 1/2 teaspoons salt;juice and zest of 1 orange(about 2 tablespoons of juice, zest to taste);chives for topping", "Cook the gnocchi according to package directions. Set aside.;Heat the butter over high heat in a large nonstick skillet. Add cauliflower, shallot, and cooked gnocchi; let it sit for a few minutes and then stir and repeat. You want the cauliflower and gnocchi to get browned, and the shallots to get soft.;Add in the cream, orange juice, red pepper flakes, and salt. Simmer for just a minute or two until desired consistency is reached - everything should be coated in a silky light sauce.;Serve immediately topped with fresh chives and orange zest", "dinner"),
("White Chocolate Cheesecake", "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/white-chocolate-cheesecake-d0222c1.jpg?quality=90&webp=true&resize=440,400", "300g digestive biscuits;150g unsalted butter, melted, plus extra to grease;400g white chocolate, broken into pieces;300g full-fat cream cheese;250g mascarpone;300ml double cream;200g strawberries or raspberries, to serve", "Crush the biscuits in a food processor until completely ground. Add butter and whizz again until you have the desired crumbly consistency.;Grease and line the base of a 23cm deep, loose-bottomed cake tin. Add the biscuit mixture to the cake tin and pat it flat. Leave to set in the fridge for approximately 30 mins.;Begin melting the chocolate in a heatproof glass bowl over a small pan of hot water on a low heat. Stir occasionally to prevent sticking. Remove from the heat and leave to cool for 10 mins until barely warm but still liquid.;Meanwhile whisk the cream cheese and mascarpone together. Add double cream and keep whisking until the mixture is just holding its own shape. Finally, add the melted chocolate and whisk until just combined.;Spoon the mixture over the cooled and set biscuit base, then smooth the top. Return to the fridge to cool for at least 6 hrs until the topping is set. Finally, decorate with fruit.", "desserts"),
("Chocolate Chip Cookies", "https://cookiesfordays.com/wp-content/uploads/2024/01/chocolate-chip-cookie-recipe-ft.jpg", "2 and 1/4 cups (280g) all-purpose flour;1 teaspoon baking soda;1 and 1/2 teaspoons cornstarch;1/2 teaspoon salt;3/4 cup (170g) unsalted butter, melted & cooled 5 minutes;3/4 cup (150g) packed light or dark brown sugar;1/2 cup (100g) granulated sugar;1 large egg + 1 egg yolk, at room temperature;2 teaspoons pure vanilla extract;1 and 1/4 cups (225g) semi-sweet chocolate chips or chocolate chunks", "Whisk the flour, baking soda, cornstarch, and salt together in a large bowl. Set aside.;In a medium bowl, whisk the melted butter, brown sugar, and granulated sugar together until no brown sugar lumps remain. Whisk in the egg and egg yolk. Finally, whisk in the vanilla extract. The mixture will be thin. Pour into dry ingredients and mix together with a large spoon or rubber spatula. The dough will be very soft, thick, and appear greasy. Fold in the chocolate chips. The chocolate chips may not stick to the dough because of the melted butter, but do your best to combine them.;Cover the dough tightly and chill in the refrigerator for at least 2-3 hours or up to 3 days. I highly recommend chilling the cookie dough overnight for less spreading.;Take the dough out of the refrigerator and allow it to slightly soften at room temperature for 10 minutes.;Preheat oven to 325°F (163°C). Line large baking sheets with parchment paper or silicone baking mats. Set aside.;Using a cookie scoop or Tablespoon measuring spoon, measure 3 scant Tablespoons (about 2 ounces, or 60g) of dough for XL cookies or 2 heaping Tablespoons (about 1.75 ounces, or 50g) of dough for medium/large cookies. Roll into a ball, making sure the shape is taller rather than wide—almost like a cylinder. This helps the cookies bake up thicker. Repeat with remaining dough. Place 8-9 balls of dough onto each cookie sheet.;Bake the cookies for 12-13 minutes or until the edges are very lightly browned. (XL cookies can take closer to 14 minutes.) The centers will look very soft, but the cookies will continue to set as they cool. Cool on the baking sheet for 10 minutes. Meanwhile, press a few extra chocolate chips into the tops of the warm cookies. This is optional and only for looks. After 10 minutes of cooling on the baking sheets, transfer cookies to a wire rack to cool completely.;Cookies stay fresh covered at room temperature for up to 1 week.", "desserts"),
("Red Velvet Cupcakes", "https://www.rainbownourishments.com/wp-content/uploads/2023/02/vegan-red-velvet-cupcakes-1.jpg", "2 large eggs, room temperature and separated;1 and 1/3 cups (166g) all-purpose flour;1/4 cup (32g) cornstarch;1/2 teaspoon baking soda;4 teaspoons (7g) natural unsweetened cocoa powder;1/4 teaspoon salt;1/4 cup (4 Tbsp; 56g) unsalted butter, softened to room temperature;1 cup (200g) granulated sugar;1/2 cup (120ml) canola or vegetable oil;2 teaspoons pure vanilla extract;1/2 teaspoon distilled white vinegar;liquid or gel red food coloring;1/2 cup (120ml) buttermilk, room temperature;cream cheese frosting for topping", "Preheat oven to 350°F (177°C). Line a 12-cup muffin pan with cupcake liners. This recipe makes 14 cupcakes, so you will have 2 cupcakes to bake in a 2nd batch.;With a handheld or stand mixer fitted with a whisk attachment, beat 2 egg whites on high speed in a medium bowl until soft peaks form, about 2-3 minutes. See photo at the bottom of this yellow cupcakes with milk chocolate frosting post for a visual. Set aside.;Sift the flour and cornstarch together to make sure it is evenly combined. Whisk this, along with baking soda, cocoa powder, and salt together in a medium bowl. Set aside.;Using a handheld or stand mixer fitted with a paddle attachment, beat the butter on high speed until smooth and creamy—about 1 minute. Add the sugar and beat on high speed for 2 minutes until creamed together fairly well. Scrape down the sides and up the bottom of the bowl with a silicone spatula as needed. Add the oil and beat on high for 2 minutes. The butter may look “piece-y” and not completely combine with the oil. This is normal and ok.;Add 2 egg yolks and the vanilla. Beat on medium-high speed until combined. Scrape down the sides and up the bottom of the bowl with a rubber spatula as needed. Beat in the vinegar and the food coloring, until you reach your desired color. I use 2 Tablespoons. With the mixer on low speed, add the dry ingredients in three additions alternating with the buttermilk, beginning and ending with the dry ingredients, and mixing each addition just until incorporated. Do not overmix. Fold whipped egg whites into cupcake batter with a rubber spatula or wooden spoon. The batter will be silky and slightly thick.;Spoon batter into cupcake liners filling 1/2 - 2/3 of the way full. Bake for 20-21 minutes or until the tops of the cupcakes spring back when gently touched and a toothpick inserted in the center comes out clean. Don't overbake; your cupcakes will dry out. Allow to cool in the pan for 5 minutes, then transfer to a rack to cool completely.;Prepare cream cheese frosting. Frost cooled cupcakes immediately before serving.", "desserts"),
("Blueberry Lemon Bread", "https://pinchofyum.com/wp-content/uploads/Lemon-Bread-1-4-960x1440.jpg", "1/2 cup butter, room temperature;1 cup white sugar;juice and zest of one lemon;2 eggs;1 1/2 cups flour;1 teaspoon baking powder;1 teaspoon salt;1/2 cup milk;1 cup blueberries", "Preheat the oven to 350 degrees. Line a loaf pan with parchment paper.;Cream the butter and sugar until fluffy. Mix in the lemon juice, lemon zest, and eggs.;Stir in the flour, baking powder, salt, and milk until the batter is mixed. Gently fold in the blueberries.;Pour batter into prepared pan. Bake for about one hour - the top should be golden brown and spring back when you touch it.;Let cool. Slice, and serve!", "desserts"),
("Butterscotch Banana Pie", "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/butterscotch-pie-82c5643.jpg?quality=90&webp=true&resize=440,400", "100g dark chocolate;125g malted milk or digestive biscuits;66g pack butterscotch pudding whip;300ml milk;2 medium bananas;60g salted caramel sauce", "Melt 75g of the chocolate in the microwave in 30 second bursts. Whizz the biscuits in a food processor into crumbs. Pour the melted chocolate onto the biscuit crumbs and whizz again. Spread the biscuit mixture across the base and up the sides of a 16-18cm shallow pie or cake tin, then put in the fridge to set.;Sprinkle the butterscotch pudding powder into the milk and whisk together until smooth. Slice the bananas. Take the tin out of the fridge and spread the salted caramel sauce over the base. Cover the caramel with the banana slices. The pudding will have started to thicken, so give it a brief whisk, then spoon it over the bananas. Put in the fridge for 5-10 mins to set. Melt the remaining chocolate and drizzle over the pie to serve.", "desserts"),
("Vanilla Panna Cotta", "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/panna-cotta-638cd76.jpg?quality=90&webp=true&resize=440,400", "2 ½ sheets gelatine;150ml milk;400ml double cream;60g caster sugar;1 vanilla pod, split lengthways;fresh strawberries, to serve;strawberry compote, to serve", "Add the sheets of gelatine to a bowl of cold water and soak for 5 mins.;Pour the milk and cream into a saucepan with the sugar and vanilla seeds (to scrape the seeds out of the pod, use the back of a knife). Stir to combine and bring to a simmer, then remove from the heat. Take the gelatine out of the cold water and squeeze out the excess, then add to the milk mixture. Stir until completely dissolved. Tip into four ramekins and place in the fridge to set for at least a couple of hours.;To serve, turn each ramekin upside-down onto a serving plate. If the panna cotta won't drop out, carefully dip the ramekin in a bowl of warm water to loosen it. Serve with a drizzle of strawberry compote and sliced fresh strawberries.", "desserts"),
("Piña Colada", "https://images.immediate.co.uk/production/volatile/sites/30/2013/11/pina-colada-c68aca7.jpg?quality=90&webp=true&resize=600,400", "120ml pineapple juice;60ml Malibu;60ml coconut cream;wedge of pineapple, to garnish (optional)", "Pulse all the ingredients along with a handful of ice in a blender until smooth. Pour into a tall glass and garnish as you like.", "drinks"),
("Chocolate Cream Cold Brew", "https://www.allrecipes.com/thmb/QFCJ47k8BOkISBEh1_IHsCQzUBc=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/7505242_Chocolate-Cream-Cold-Brew_Yoly_4x3-35883a8c1d054fb3a5635b0e2758b7c7.jpg", "2 tablespoons heavy whipping cream;1 tablespoon milk;1 1/2 teaspoons chocolate syrup;1 1/2 teaspoons cocoa powder;1/2 teaspoon vanilla extract;1 cup cold brew coffee", "Add heavy whipping cream, milk, chocolate syrup, cocoa powder and vanilla into a tall glass. Whip with a milk frother until until desired consistency is reached.;Serve over cold brew coffee.", "drinks"),
("Blueberry Smoothie", "https://www.allrecipes.com/thmb/PeGz_f-_EZHNuCsKViel9PM9tNw=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/215184-blueberry-smoothie-ddmfs-0407-3x4-hero-2dc0563113084f1faea7ad1d7fe58d38.jpg", "1 cup blueberries (frozen or fresh);1 (8 ounce) container plain yoghurt;¾ cup 2% reduced-fat milk;2 tablespoons white sugar;½ teaspoon vanilla extract;⅛ teaspoon ground nutmeg", "Gather all ingredients.;Blend blueberries, yogurt, milk, sugar, vanilla, and nutmeg in a blender until frothy, scraping down the sides of the blender if needed.;Divide between 2 glasses and serve immediately. Enjoy!", "drinks"),
("Strawberry Iced Tea", "https://www.allrecipes.com/thmb/nV5ldDHrISMNU6LbdjmT9cpHrLg=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/8665564_Strawberry-Ice-Tea_Yolanda-Gutierrez_4x3-8ba899621b1f455a82f2f4cff04a6d16.jpg", "2 cups water;4 bags black tea;1 (16 ounce) container fresh strawberries, sliced;1/2 cup white sugar;1 tablespoon strawberry syrup;1 tablespoon freshly squeezed lemon juice;2 cups cold water", "Bring water to a boil in a saucepan. Remove from heat and add tea bags. Let steep for 1 hour; remove tea bags.;Place strawberries in a large bowl and sprinkle with sugar. Let stand 10 minutes; stir. Stir in strawberry syrup and lemon juice. Mash strawberries to desired consistency.;Pour strawberry mixture, tea, and 2 cups cold water into a pitcher. Stir well. Chill until ready to use.", "drinks"),
("Cucumber-Lime Tonic", "https://www.allrecipes.com/thmb/JLdutPW11FBvhNdiaQ0bvAWHiQE=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/7642520_Cucumber-Lime-Tonic_France-C_4x3-0a493b6b39bb4c4fb2fd499dc45be931.jpg", "1 English cucumber, peeled;2 fluid ounces fresh lime juice;1 1/2 tablespoons sugar;2 cups ice;8 fluid ounces tonic water;2 slices lime, for serving", "Cut two thin slices from cucumber and set aside for garnish. Chop remaining cucumber into large chunks and place in blender with lime juice and sugar. Blend until smooth. Strain the cucumber mixture through a fine strainer into a jar. You should have about 8 ounces.;Fill two glasses with ice. Divide the mixture between the glasses, about 4 ounces each. Top each glass with 4 ounces of tonic water. Garnish with a cucumber and lime slice and serve.", "drinks"),
("Woo Woo", "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/440x400-woo-woo-1a6bc34.jpg?quality=90&webp=true&resize=440,400", "50ml vodka;25ml peach schnapps;100ml cranberry juice;few drops fresh lime juice;ice;wedge of lime", "Fill a cocktail shaker with ice then add the vodka, peach schnapps, cranberry juice and a few drops of lime juice. Shake really well then strain into a tumbler with extra ice. Garnish with a wedge of lime.", "drinks");

INSERT INTO users (username, password)
VALUES
("admin", "admin");
# Sandbox Coop


## [Final Demo Site](sandboxcenter.com)
###### [Past Demo Site](http://guarded-refuge-7678.herokuapp.com)

### TODO
* Apply basic styles to calendar
* get calendar hooked up to db
* get calendar hooked up to gcal

### Calendar resources:
* [UI Calendar](http://angular-ui.github.io/ui-calendar/)
* [angular-ui-calendar](https://github.com/angular-ui/ui-calendar)
* [fullcalendar](http://arshaw.com/fullcalendar/docs/)

### Site should include...
* Eventbrite
* Ecommerce with paypal
* hand drawn font would be cool
* Branding: Sandhill crane
* social media, sign up for mailing list, pull in tweets
* blog section that different members can post to
* Members are key part of story
* Diverse use of land: rabbits, compost, dyes, herbs, etc.
* Family land / used for 100 years
* users should have control on where they look through the members/products. just show them the diversity


### This app was scaled using yeoman, a scaffolding engine that uses
* Bower - Package Management
* Grunt - Building/Task management
* generator-angular-fullstack - Yeoman generator to scaffold the project to include Node, Express, Mongo, Passport

### Installation
1. Install yeoman `npm install -g yo`
2. Install yeoman generator-angular-fullstack `npm install -g generator-angular-fullstack`

### Resources:
##### Yeoman
* [generator-angular-fullstack](https://www.npmjs.org/package/generator-angular-fullstack)

##### UI utils
* [angular ui utils](http://angular-ui.github.io/ui-utils/)

##### Calendar
* [UI Calendar](http://angular-ui.github.io/ui-calendar/)
* [angular-ui-calendar](https://github.com/angular-ui/ui-calendar)
* [fullcalendar](http://arshaw.com/fullcalendar/docs/)

##### Moment
* [moment](http://momentjs.com/docs/)
* [angular-moment](https://github.com/urish/angular-moment)

### Deployment:
1. `grunt build`
2. cd to dist file: `git push heroku master`
3. `heroku open`

##### NOTE: you can skip step 1 and 2 to get the project going, but adding routes and resources, etc is made much easier by having access to the yo command
3. Create Project Directory `mkdir sandbox-coop`
4. `cd sandbox-coop`
5. Clone Repo `git clone https://github.com/gemfarmer/sandbox-coop.git`
6. Install Bower Dependencies `bower install`
7. Install Node Modules `npm install`
8. In a new terminal tab, start mongo `sudo mongod`
9. In another new terminal tab, enter mongo shell `mongo`
10. In mongo shell, create new dev database `use fullstack-dev`
11. In original tab, start development server `grunt serve` NOTE: not a typo `grunt serve`

### Workflow, version control, branching
1. As we discussed at VE the other day, I would like to try our best to be anal about branching, so create new branch `git checkout -b [new branch name]` and push to it, create a pull request and we'll review it. Obviously if it is a small edit that won't have a potential cascading bug just push to master. If you think I'm being too rigid let me know and I can be less up-tight

### Add-ons
* Eventbrite
* Paypal
* Webfonts --> [Nasty Icons?](http://nastyicons.com/)
* discus??
* web chimp

### Project Timeline
* Soft Deadline: May / June

##### March
* Scaffold project √
* Build database √
* Build user settings / Login √
* Build basic page layout with correct functionality
* Deploy to heroku throughout

##### April
* Begin working on stylistic component of site
* Encorporate webfonts
* Add admin role and build out editable backend (hopefully using sockets)
* Integrate with Paypal
* Integrate with Eventbrite

##### May
* Begin deploying, testing, making edits, working with Libby and other Sandboxers to tweak feel of site
* ???

### Stylistic Inspiration
* Greenhorns: minimalist, handrawn, illustrative
* bepollen.com


### What the Admin Structure will look like:
* admin user at highest level.
	* Accesses separate and simplified page through /admin url
	* Page allows superuser (admin) to edit what other users are allowed to see/do on the normal site
	* List and search information on users
	* can add certain things to the site
* users with special (contributor) privileges. Can edit certain areas of the site
* general users. no editing priveleges. can comment or buy things

### Site Structure --User FLOW
* Landing Page
	1. Logo
	2. Links below for ...
		* shop
			1. available items in inline-blocks
			2. List of filtering options
			3. Search bar
		* login/sign-up
		* calendar
			1. Calendar page with different contributors tagged with different colors
		* Map
		* CONTRIBUTOR
			- new events
			- new blog posts
			- add products
			- edit their pics/ description
		* ADMIN
			- add events
			- add blog posts
			- add products
			- manage member statuses
			- check site stats
	3. Text blog with latest contributions from site "contributors" / Link to Blog
		1. Blog has archives
		2. Formatting??
		3. Can view individual contributors blog

	4. "Meet our members" block with picture carousel
		-> About us/Philosophy
		* Inline block member blocks (pic and basic description)
		* Link to their products?
	5. Social Links, Twitter stream






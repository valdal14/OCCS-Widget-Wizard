# OCCS Widget Wizard

NPM Package that allows the creation of a base OCCS widget template project structure

The **OCCS Widget Wizard** is a **NPM** package that allows you to create **widgets / extensions** based project structures to extend **[Oracle Commerce Cloud Service](https://cloud.oracle.com/en_US/commerce-cloud)** out-of-the-box functionalities.

## How to use it

Create a new project using:

```javascript
npm init
```

After that install the **OCCS Widget Wizard** using the following command:

```javascript
sudo npm install occs-widget-wizard
```

Once the package is successfully installed open the package.json file and add the following inside the "scripts" section of you package.json file:

```javascript
"start": "node ./node_modules/occs-widget-wizard/index.js"
```

Save and run the following command:

```javascript
npm start
```

This will automatically lunch the wizard and now you can provide the mandatory fields in order to create you Oracle Commerce Cloud widget/extension based project.

```javascript
.:: OCCS Widget Wizard ::.

For more information how to create an Oracle Commerce Cloud extension please visit the link below:

https://goo.gl/66Kdpp

Please enter the extension id:
```

Once the wizard process is completed the wizard will create a project structure for a new OCCS extension and the mandatory folders and files will be saved on your HDD.

The last thing you must do is simply **zip** the **widget** folder and the **ext.json** file and you will be ready to upload the **.zip archive** to your OCCS instance.

## Sample video on how to use the application

https://youtu.be/eL_qcU2PCv0

For more information about Oracle Commerce Cloud custom widget development please read the following doc:

[OCCS Custom Widgets](https://docs.oracle.com/cd/E65426_01/Cloud.15-3/WidgetDev/html/s0201developacustomwidget01.html)

**NOTE:** You can use the official [Oracle Commerce Cloud Service Widget Development Guide](http://docs.oracle.com/cd/E65426_01/Cloud.15-3/WidgetDev/html/s0201developacustomwidget01.html) as reference.

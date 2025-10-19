function TopicsPage(){
    return (
        <>
            <h2>Web Developement Topics</h2>
            <nav className="local">
                <a href="#webServers">Web Servers</a>
                <a href="#frontendDesign">Frontend Design</a>
                <a href="#optimizingImages">Optimizing Images</a>
                <a href="#favicons">Favicons</a>
                <a href="#cascadingStyle">Cascading Style</a>
                <a href="#forms">Forms</a>
                <a href="#express">Express</a>
                <a href="#javaScript">JavaScript</a>
            </nav>

            <article id="webServers">
                <h3>Web Servers</h3>
                <p>A designated home page is the default homepage of a web application without specifying a specific location.
                Designated homepages can be <strong>static</strong> or <strong>dynamically generated</strong> based on the need of the web page. Static pages can be displayed 
                with files, like index.html, while dynamic pages can be displayed using different languages such as <strong>CSS</strong> or <strong>JavaScript</strong>.
                The type of page that will be displayed depends on the on how that web server handles the request for the <strong>URL</strong>. </p>
                <p>When using the browsers Inspector Network tab, there are a few differences between the local file and the web
                server file. The web server file shows the <strong>IP Address</strong> and the <strong>Server Port Number,</strong> in this case it is 443 which is protocol HTTPS.
                In the <strong>request</strong> of the web server file we also find more information such as it the different encodings accepted, 
                cache controls, the language, and the host. This information is not available on our local file.
                The responses are also different as the local file only tells us the file type, HTML, whereas the web server tells us the file type,
                the server, and when the file was last modified.
                They both do indicate the <strong>status code</strong> and request method which his 200 OK and GET respectively.</p>
                <p>The status of favicon.ico is "200 OK", this indicates the resources can be found on the webpage. This can either be on the current webpage or the host domain's designated homepage, which is web.engr.oregonstate.edu.
                As for main.css and main.js, they show a status code of 404 because they were not referenced in the code explicitly, and they could not be found on the designated homepage.</p>
                <p>My web server ULR is https://web.engr.oregonstate.edu/~espinalv/a1-espinalv/ the <strong>scheme</strong> is HTTPS, the <strong>subdomains</strong> are web and engr, the <strong>host domain</strong> 
                is oregonstate.edu, and the resources is /a1-espinalv/ which is an HTML file.</p>
            </article>

            <article id="frontendDesign">
                <h3>Frontend Design</h3>
                <p>Frontend Design refers to what the users see when they are open a webpage or any service requiring user to interaction. It consists of the visual design and the usability of the service.
                The visual design aspect for frontend involves using a consistent color scheme, font, and layout that. The goal is to make it easy on the user to read. <strong>Usability</strong> refers to how well the user is able to interact with that web page or service. 
                This is more than how whether a page works and also involves <strong>response times</strong>, <strong>content depth levels</strong>, and how often the user will 
                switch between input devices. When a user interacts with a service, certain factors come into play, these are typically highlighted by the Five "E"s of usability.</p>
                <dl>
                <dt><strong>Effective</strong></dt>
                <dd>How effective is the interface at helping the user meet their goal.</dd>
                <dt><strong>Efficient</strong></dt>
                <dd>How efficient can the user perform at task with the least number of steps.</dd>
                <dt><strong>Enjoyable or Engaging</strong></dt>
                <dd>Refers to whether the user is able to engage with the interface as intended.</dd>
                <dt><strong>Easy to learn, or navigate</strong></dt>
                <dd>Whether the user can quickly pick up the website without using it before.</dd>
                <dt><strong>Error-free, or error-tolerant</strong></dt>
                <dd>Is the website able to be used by everyone, or are there common errors.</dd>
                </dl>
                <p>Page layout are a <strong>block-level</strong> element that help organize the flow of the website. They also break up the flow of content by inserting a newline before and after the element. 
                The header tag is usually at the top of the page and acts a banner to the app and is typically used across pages. The main tag is the primary block of the body, holds the central content of the website. 
                The section tag is used to group information together, whether that information is related to each other or not. The article tag is similar to the section tag; however, article is meant to group similar information together. 
                The footer tag holds additional information on the website such as contact information, copyright information, or links to critical pages.</p>
                <p>The nav tag is used to provide links to other pages, whether it be within the same website or to external websites. Depending on the link source, there are two main ways of linking sources, <strong>absolute</strong> and <strong>relative</strong> paths.
                An absolute path includes the complete URL, these can be within the same folder but are ideal to external sites. For local files, a relative path is best as it does not require the entire and a relative path can be accomplished by adding "./" before the target file.
                To implement these links, <strong>anchor</strong> tags link to pages within the same website or to external files or websites. There are three ways of using anchor tags:</p>
                <ol>
                <li>External Content - Uses <em>href</em> attribute to specify the URL to visit. It is followed by a description of the link.</li>
                <li>Internal Link - Uses <em>href</em> attribute to link to an article within the webpage that contain an ID.</li>
                <li>Page-to-page - Uses <em>href</em> attribute to link to other pages within the same website</li>
                </ol>
            </article>

            <article id="optimizingImages">
                <h3>Optimizing Images</h3>
                <p>For images to go on websites there are a few optimizing specifications that need to be met to make the website load fast, display the optimal image size, and preserve server space. 
                One of the first step to including an image to a website is to have a <strong>descriptive file name</strong> to correctly categorize the image when it is searched online. Photos taken today on
                smartphones or cameras come in large files because of the resolution and quality they are taken in. If we want to upload those images to a website, we  want to <strong>reduce their file size</strong> so the images load quickly. 
                We can reduce the file size by <strong>adjusting the dimensions</strong> and by <strong>reducing the resolution</strong>. A benefit of adjusting the image size, besides reducing the file size, is the images are able to be properly displayed. 
                If a photo is uploaded to a website without adjusting its dimensions, parts of the image can be cut off and the image will take longer to load. Reducing an image's resolution decreases its quality, but it also reduces the file size, making it more optimal for different devices that do not
                require the same resolution. When optimizing an image, we also want to adjust the <strong>color mode</strong> to have a consistent image color across the website. The final aspect of optimizing an image is choosing the correct <strong>file format</strong>.</p> 
                <p>Different images have different requirements. For example, the 
                <strong>.JPG</strong> format is best for photos, as they are typically high quality, have various colors, and are large files. Using .JPG will compress the file with minimal quality loss. The file format <strong>.WebP</strong> can also be used for photo, but the file sizes will be bigger. 
                We would not want to use .JPG or .WebP for line-art images as line-art is limited in color and depth for this we can use file formats <strong>.GIF</strong>. However, .GIF files have antialiased edges. If we want smooth edges we can use the file format <strong>.SVG</strong>
                which will would be better for text but at the trade-off for a bigger file. Another file format option for line-art is <strong>.PNG</strong> which has limited antialiasing and can have more colors than a .GIF file while also being a smaller file size than .SVG.</p>
            </article>

            <article  id="favicons">
                <h3>Favicons</h3>
                <p>Whenever a website is visited, the browser tab will typically have an icon. These are called favicons and can also been seen in the bookmark section of your browser. Favicons make it easy to identify a website when on a browser and also can be used as a logo on the website. Since the scaling 
                of a tab and a website logo are different, favicons will come in two types, <strong>fancy favicon</strong> and <strong>simple favicon</strong>. Website logos or banner will use larger favicons. These can also be used on mobile devices when the website is saved to a home screen. Simple favicon
                are used for browser tabs and are typically lower quality with less detailed images. Favicons can come in multiple file formats including .GIF, .PNG, .ICO, and .SVG; however, the most common file formats for favicons are .SVG and .PNG.</p>
            </article>

            <article id="cascadingStyle">
            <h3>Cascading Style</h3>
            <p>Stylesheets are crucial for websites as they ensure a consistent look and feel across different pages. This consistency enhances user experience, making navigation easier to follow. Stylesheets also help organize content by differentiating between global elements, like headers and navigation 
                links, and the main body content. Additionally, they allow developers to reuse styles across multiple pages, streamlining the development process and maintaining uniformity without repetitive coding.</p>
            <p>To implement style to a website there are 5 methods, the first way is to use an external CSS file. External files involve using the &lt;link&gt; tag to the global &lt;head&gt; of a website. This allows all pages of the website to use the linked stylesheet. 
                A second method, is importing a CSS file using @import. This can be done on the global stylesheet, or it can be added by using the &lt;link&gt; tag after the global stylesheet. If there are small style changes that need to be made, these can be done directly
                within the HTML file by embedding styles between a pair of &lt;style&gt; tags or adding inline of an element by using the style attribute. JavaScript also allows for changing the style by modifying the Document Object Model (DOM).</p>
            <p></p>
            </article>

            <article id="forms">
            <h3>Forms</h3>
            <p>When creating forms there are various aspects that need to be taken into considertion as there is no knowing who might use the form. For that reason, it is important to make forms accessible, which is achieved by providing clear instructions on the form and using the correct tags.
                These tags include &lt;legend&gt; which identify the form groups purpose, &lt;fieldset&gt; which groups related elements within the form and provides a visual aid that these elements are related, and &lt;label&gt; which is used to help users know the purpose of each
                individual input box by associating it with its corresponding input element. Another goal to making forms accessible is to let users know why the form is being completed and what parts are required because it helps users understand the forms purpose and helps them successfully 
                complete it. To have an accessible form, the first field should be set to autofocus which ensures the users can start typing without having to click the data field. Additionally, ensuring all fields can be completed with just a keyboard is crucial to accessibility. This ensures those 
                with mobility impairment who rely on keyboard navigation can fill the form without issue. Sometimes forms can be long and complex, if that is the case having tab indexing is important for accessibility as it creates a structured order to complete the form. The last goal of having an accessible 
                form is ensuring the validation messages are screen readable, this will those with screen readers know they have completed the form.</p>
            <p>When creating a form it is also the correct tags necessary to have as they help with structure and help identify infomration to send. Some necessary tags include the &lt;input&gt; tag which is used to create interactive controls. The &lt;input&gt; tag is paird with the <strong>type</strong> attribute
                which helps identify the type of of input field that is displayed, whether it be a checkbox or a text field. Additionally, the <strong>name</strong> attribute is needed is this helps identify what the data input represents. Another tag used forms is the &lt;textarea&&gt; which allows for a 
                text box  which the user can enter multiple lines of text. Once the form is complete and ready to be sent, there will usually be a button to submit. This tag is performs the action identified by the form.</p>
            <p>The styling of forms is important as it helps the users distinguish different parts of the form and required parts. An important part of forms is display, which when paired with the block format which puts labels on their on block and without it the labels will be on a single line. Padding on certain
                parts such as the input, button, and textarea help with accessibility to click on the data fields. Certain fields, such as emails address and passwords, also require certain information. For these we can put requirements like requiring email fields to have an "@" symbol or having passwords contain a certain number
                of characters or of a specified length. If our form has required fields, we can style those by adding a border to the fields with the required tags and by adding an asterisk "*" to datafields with a required attribute.</p>
            </article>

            <article id="express">
            <h3>Express</h3>
            <p>Node, npm, and Express are important part of web development as they help developers create more complex websites and improve performance by offloading some tasks. JavaScript can be run either on the browser or through Node, making it ideal for server side operations. An aspect of Node is npm, which is a package
                manager that helps in managing dependencies and packages in your project. Npm also offers a vast library of packages to allow developers to utilize preexisting solutions rather than building from scratch. Express is a Node application that simplifies web development. Express also handles data routing, server creation, 
                and other essential elements for building websites.</p>
            </article>

            <article id="javaScript">
            <h3>JavaScript</h3>
            <p>In JavaScript there are different data types; however, the most common data types are number, string, boolean, null and undefined, and an object.</p>
            <p>Objects in JavaScript are used to store data which we are able to read, update, and delete that data. Arrays are part of objects that store string names of property values.
                JSON, which stands for JavaScript Object Notation, is used for storing and transporting data.</p>
            <p>Conditionals and loop are an important part of JavaScript. Conditionals execute different actions based on different a condition being true or false.
                Loops, such as for loops and while loops, execute a block of code repeatedly until a condition a specified condition is met.</p>
            <p>Object-oriented programming (OOP) is the idea that of using objects and classes to organize code. OOP allows for data and methods to be bundled into one unit , which makes our code more organized and easier to manage.</p>
            <p>Functional programming is when programs are constructed by applying and creating functions that often avoid mutable types.</p>
            </article>
            
            <article>
                <h3></h3>
                <p></p>
            </article>
        </>
    )
}
export default TopicsPage;
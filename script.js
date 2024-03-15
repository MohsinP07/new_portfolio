function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}




// Function to open project details dialog
function openProjectDetails(projectName) {
  const dialog = document.getElementById("project-details-dialog");
  const content = document.getElementById("project-details-content");

  // Populate content based on projectName
  switch (projectName) {
    case "Shop Easy":
      content.innerHTML = `
        <h2>Shop Easy Project Details</h2>
        <p>
        Project Title: Shop Easy - Multi-User E-commerce Mobile Application<br>

        Project Description:
       <br> Shop Easy, your ultimate destination for hassle-free online shopping! Built with Flutter/Dart for the frontend and NodeJS with MongoDB for the backend, Shop Easy revolutionizes the e-commerce experience with its intuitive interface and comprehensive features. Catering to three primary user roles – Customer, Seller, and Admin – Shop Easy ensures seamless interaction and efficient management for all users.
        
        Key Features and Functionalities:<br>
        
        User Roles:<br>
        Customer:<br> Browse products by category, add items to cart or wishlist, specify quantities, and choose from various payment methods including UPI Payment, card Payment, and Cash on Delivery. Customers can track order delivery status and access order history in their profile.
        <br>
        Seller: <br>Manage product inventory effortlessly by adding, editing, or removing products with details such as stock availability. Sellers monitor received orders, update order statuses, and track earnings through graphical representations.
        <br>
        Admin:<br> Maintain control over the platform by managing products, viewing orders, monitoring user and seller counts, and taking necessary actions like deleting fake products or suspending users/sellers for any issues.
        <br>
        Product Management:<br>
        Customers can efficiently view categorized products and check stock availability before making a purchase.<br>
        Sellers ensure accurate representation of available stock by effortlessly managing products within their inventory.<br>
        Order Management:<br>
        Customers track orders seamlessly from confirmation to delivery, ensuring transparency and peace of mind.<br>
        Sellers receive notifications for orders placed on their products and update order statuses accordingly.<br>
        Seller Verification:<br>
        Sellers provide necessary details such as shop name and license information to ensure authenticity and credibility.<br>
        Responsive UX Design:<br>
        Shop Easy boasts a simple yet effective user interface, offering the best possible responsive user experience across different devices.<br>
        Additional Features:<br>
        
        Product Rating:<br> Users can rate products based on their experience, providing valuable feedback to both customers and sellers, enhancing the overall shopping experience.
        <br>
        Product Search:<br> Users can easily search for products using the search feature, enabling quick access to desired items and enhancing the browsing experience.
        <br>
        Shop Easy aims to streamline the buying and selling process, fostering trust and convenience for all users while ensuring efficient management and administration by the platform's administrators. With its user-friendly interface, comprehensive functionalities, and added features like product rating and search, Shop Easy is your go-to platform for seamless online shopping.</p>
      `;
      break;

    case "Chatur AI Voice Assistant":
      content.innerHTML = `
        <h2>Chatur AI Project Details</h2>
        <p>Project Title: Chatur - AI Voice and Chat Assistant
        <br>
        Project Description:<br>
        Chatur is an innovative AI Voice and Chat Assistant application designed to provide users with seamless interactions using natural language processing and state-of-the-art AI models. Developed using Flutter/Dart and integrated with the OpenAI API, Chatur offers a unique experience where users can effortlessly engage with both ChatGPT and DALL-E models to obtain text, image, or audio responses based on their preferences.
        <br>
        Key Features:<br>
       
        Dual AI Models Integration:
        <br>
        Chatur seamlessly integrates ChatGPT and DALL-E AI models, allowing users to receive responses in text, image, or audio formats based on their queries.<br>
        Natural Language Understanding:<br>
        
        Leveraging advanced natural language processing capabilities, Chatur automatically recognizes user prompts and determines whether the user seeks text, image, or audio responses.
        <br> Voice Interaction:<br>
        
        Users have the option to speak their prompts, enabling voice-based interactions with the assistant. Chatur processes spoken prompts and delivers responses in the desired format, enhancing user convenience.
        <br>  Text Interaction:<br>
        
         Alternatively, users can input text prompts to initiate interactions with Chatur. The assistant analyzes text inputs and provides responses tailored to the user's requirements.
         <br> Dynamic Response Generation:<br>
        
        Chatur dynamically generates responses based on user queries, ensuring relevant and contextual interactions. Whether users seek information, imagery, or audio content, Chatur delivers personalized responses in real-time.
        <br>  User-Friendly Interface:<br>
        
        With a sleek and intuitive user interface, Chatur offers a seamless browsing experience, enabling users to navigate effortlessly between text, image, and audio responses.
        Chatur revolutionizes the way users interact with AI assistants by offering a versatile platform where natural language understanding and AI model integration converge. Whether users prefer text-based communication, voice interactions, or visual responses, Chatur adapts to their preferences, delivering tailored responses with precision and efficiency.
        </p>
        `;
      break;
    case "News Watch":
      content.innerHTML = `
        <h2>News Watch Project Details</h2> <br>
        <p>Project Title: NewsWatch - Your Global News Companion <br>

        Project Description: <br>
        NewsWatch is a cutting-edge mobile application designed to serve as your ultimate global news companion. Developed using Flutter/Dart and leveraging the power of the NewsAPI service, NewsWatch offers users a seamless and intuitive platform to stay informed about the latest news from around the world.
        <br>
        Key Features: <br>
        
        Comprehensive News Coverage: <br>
        
        NewsWatch provides users with access to a vast array of news articles sourced from reputable news providers worldwide. From breaking news to in-depth analysis, users can explore a wide range of topics and stay abreast of global events.
        <br> Easy Navigation by Category: <br>
        
        Users can effortlessly navigate through news articles categorized into various topics such as Politics, Technology, Business, Sports, Entertainment, and more. This intuitive categorization allows users to quickly find news stories that align with their interests.
        <br> Detailed News Articles: <br>
        
        Upon selecting a news article, users can delve into detailed information including the article's title, summary, publication date, and source. Users have the option to read the full article directly within the app to gain a comprehensive understanding of the news story.
        <br> Source Attribution: <br>
        
        NewsWatch prioritizes transparency by providing users with the source of each news article. By knowing the origin of the news content, users can verify its credibility and access additional content from their preferred news outlets.
        <br> User-Friendly Interface: <br>
        
        With its sleek and user-friendly interface, NewsWatch offers a seamless browsing experience. The app's intuitive design focuses on readability and ease of navigation, ensuring users can consume news content effortlessly.
        <br> Real-Time Updates: <br>
        
        News articles are continuously updated in real-time, ensuring that users are always informed about the latest developments and breaking news stories as they unfold around the world.
        <br> NewsWatch empowers users to become well-informed global citizens by providing them with a convenient and reliable platform to access diverse news content from trusted sources. With its user-friendly interface and comprehensive news coverage, NewsWatch is the go-to app for staying updated on the latest events and trends worldwide.
        </p>
        
        `;
      break;
    case "My Chat":
      content.innerHTML = `
            <h2>My Chat Project Details</h2> <br>
            <p>Project Title: My Chat <br>
            Project Description:<br>
            Our Real-Time Chat Application, built using Flutter/Dart for the frontend and Firebase for backend services, revolutionizes the way users communicate and connect. With seamless mobile number authentication and OTP verification, users can swiftly create accounts and dive into a world of instant messaging. Here's a breakdown of the key features:
            <br>
            User Authentication:
            <br> Utilizing mobile number authentication and OTP verification, users can create accounts securely and efficiently.<br>
            Messaging Features:

            <br> Users can exchange various types of messages including text, images, videos, audios, and GIFs, enhancing communication possibilities.
            The application supports real-time message delivery, ensuring instant communication between users.
            <br>  Status Updates:<br>

            Users can share statuses that are visible to their contacts for a duration of 24 hours, fostering real-time updates and interactions.
            <br> Group Chats:<br>

            Users have the ability to create group chats, enabling multiple participants to engage in conversations and share messages of all types.
            <br>  Online Presence and Message Status:<br>

            Users can view the online status of their contacts, facilitating timely communication.
            <br> Detailed message status indicators inform users about message delivery and read receipts, enhancing communication transparency.<br>
             Firebase Integration:<br>

            Leveraging Firebase backend services, our application ensures reliable real-time communication, seamless data synchronization, and robust security measures.
            <br>  Our Real-Time Chat Application redefines communication by offering a versatile platform where users can exchange messages in various formats, create group chats, share statuses, and stay connected in real-time. With a sleek and intuitive user interface, our application provides a seamless chatting experience, fostering meaningful interactions and connections.
            </p>`;
      break;
    // Add cases for other projects similarly
  }

  // Show the dialog
  dialog.style.display = "block";
}

// Function to close project details dialog
function closeProjectDetails() {
  const dialog = document.getElementById("project-details-dialog");
  dialog.style.display = "none";
}





function openProjectImages(projectName) {
  const dialog = document.getElementById("project-images-dialog");
  const content = document.getElementById("project-images-content");

  // Populate content based on projectName
  switch (projectName) {
    case "Shop Easy":
      content.innerHTML = `
        <h2>Shop Easy Project Images</h2>
        <div class="slider">
          <img src="assets/ShopEasy/home.jpeg" alt="Image 1" class="project-image">
          <img src="assets/ShopEasy/category_wise.jpeg" alt="Image 2" class="project-image">
          <img src="assets/ShopEasy/orders.jpeg" alt="Image 3" class="project-image">
          <img src="assets/ShopEasy/wishlist.jpeg" alt="Image 4" class="project-image">
          <img src="assets/ShopEasy/stock_update.jpeg" alt="Image 5" class="project-image">
          <img src="assets/ShopEasy/checkout.jpeg" alt="Image 6" class="project-image">
          <img src="assets/ShopEasy/card_payment.jpeg" alt="Image 7" class="project-image">
          <img src="assets/ShopEasy/upi_payment.jpeg" alt="Image 8" class="project-image">
          <img src="assets/ShopEasy/order_tracking.jpeg" alt="Image 9" class="project-image">
          <img src="assets/ShopEasy/seller_all_product.jpeg" alt="Image 10" class="project-image">
          <img src="assets/ShopEasy/seller_add_products.jpeg" alt="Image 11" class="project-image">
          <img src="assets/ShopEasy/seller_change_status.jpeg" alt="Image 12" class="project-image">
          <!-- Add more images as needed -->
        </div>
      `;
      break;
    case "Chatur AI Voice Assistant":
      content.innerHTML = `
        <h2>Chatur AI Voice Assistant Project Images</h2>
        <div class="slider">
          <img src="assets/Chatur/home.jpeg" alt="Image 1" class="project-image">
          <img src="assets/Chatur/dalle.jpeg" alt="Image 2" class="project-image">
          <img src="assets/Chatur/chatgpt.jpeg" alt="Image 3" class="project-image">
          <!-- Add more images as needed -->
        </div>
        `;
      break;
    case "News Watch":
      content.innerHTML = `
        <h2>News Watch Project Images</h2>
        <div class="slider">
          <img src="assets/NewsWatch/home.jpeg" alt="Image 1" class="project-image">
          <img src="assets/NewsWatch/sports_news.jpeg" alt="Image 2" class="project-image">
          <img src="assets/NewsWatch/tech_news.jpeg" alt="Image 3" class="project-image">
          <!-- Add more images as needed -->
        </div>
        `;
      break;
    case "My Chat":
      content.innerHTML = `
        <h2>News Watch Project Images</h2>
        <div class="slider">
          <img src="assets/MyChat/landing.png" alt="Image 1" class="project-image">
          <img src="assets/MyChat/recent_chats.jpeg" alt="Image 2" class="project-image">
          <img src="assets/MyChat/user_chat.jpeg" alt="Image 3" class="project-image">
          <img src="assets/MyChat/group_chat.jpeg" alt="Image 4" class="project-image">
          <img src="assets/MyChat/view_status.jpeg" alt="Image 5" class="project-image">
          <img src="assets/MyChat/create_group.jpeg" alt="Image 6" class="project-image">
        
          </div>
        `;
      break;
    // Add cases for other projects similarly
  }

  // Show the dialog
  dialog.style.display = "block";

  // Start the slideshow
  startSlideshow();
}

function startSlideshow() {
  const images = document.querySelectorAll(".project-image");
  let currentImageIndex = 0;

  function showImage(index) {
    images.forEach((image, i) => {
      if (i === index) {
        image.style.display = "block";
      } else {
        image.style.display = "none";
      }
    });
  }

  function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    showImage(currentImageIndex);
  }

  // Show the first image initially
  showImage(currentImageIndex);

  // Automatically switch to the next image every 3 seconds (adjust as needed)
  setInterval(nextImage, 3000);
}





function closeProjectImages() {
  const dialog = document.getElementById("project-images-dialog");
  dialog.style.display = "none";
}





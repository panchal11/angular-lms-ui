# angular-lms-ui

### CoreModule
The `CoreModule` drives the Angular application. It handles the API HTTP Interceptor, Authentication Guard and Authentication Service. In addition, the `CoreModule` holds the Login component, not-found component and the global Header component.

#### HeaderComponent

The `HeaderComponent` independently determines the route from the URL, and the permissions set in the User Authentication token, and then appropriately displays the links in the navigation bar.

### AdminModule

The `AdminModule` represents a privately accessible module which is lazy-loaded only upon successful user authentication via the `LoginComponent` and `AuthenticationService` in the `CoreModule`. In a real-world application the `AdminModule` would be the registered-user dasboard. In this demo, you can use any username and password to login.

### SharedModule

The `SharedModule` contains directives and components which may be used across multiple modules and areas of the application. A good example is the `RequiredLabelDirective` which adds an asterisk to an input label. This directive can be used all over the application including the `FormComponent` and `LoginComponent` which are in the `FormModule` and `CoreModule` respectively.

For a more detailed explanation on the architectural decisions made in this design, [read this article](https://www.technouz.com/4644/angular-5-app-structure-multiple-modules/).
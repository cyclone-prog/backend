const http = require("http");
const PORT = 3001;
const data = [];

const app = http.createServer((req, res) => {
  if (req.method === "POST") {
    if (req.url === "/api/v1/register") {
      let body = "";

      req.on("data", (chunk) => {
        //This event is emitted whenever a chunk of data is received in the request.
        body += chunk.toString();
      });
      req.on("end", () => {
        //This event is emitted when all the data has been received.
        const { email, password } = JSON.parse(body);
        if (!email || !password) {
          res.statusCode = 400;
          res.end(
            JSON.stringify({
              //sending data from server to client over http response,the data needs to be in the form of string. so converting javascrip object into json allows us easily transmitted over the network.
              status: false,
              error: "Email or password not found",
            })
          );
          return;
        }
        const existingUser = data.find((val) => val.email === email);
        if (existingUser) {
          res.statusCode = 400;
          res.end(
            JSON.stringify({
              status: false,
              error: "Username already registered",
            })
          );
          return;
        }

        const newUser = { email, password };
        data.push(newUser);

        res.statusCode = 200;
        // The "Content-Type" header is an important part of the HTTP protocol that specifies the type of data contained in the response.
        //By setting the "Content-Type" header to "application/json", we explicitly indicate to the client that the response body will be in JSON format.
        // Client-side Expectations:

        //>When the client receives an HTTP response, it examines the "Content-Type" header to determine how to interpret and handle the response body.
        //>Setting the header to "application/json" helps the client understand that the response body will contain JSON data.
        //>This allows the client to parse the JSON response appropriately and extract the necessary information.
        //note:setting content type as json format that we are geeting from response and helps client to understand that response body will contain JSON data.
        res.setHeader("Content-Type", "application/json");
        res.end(
          JSON.stringify({
            status: true,
            error: "User registered successfully",
            data,
          })
        );
      });
    } else if (req.url === "/api/v1/login") {
      let body = "";

      req.on("data", (chunk) => {
        //This event is emitted whenever a chunk of data is received in the request.
        //Inside the event listener, the received chunk is converted to a string using chunk.toString(), and then appended to the body variable.
        body += chunk.toString();
        //In the code snippet you provided, chunk.toString() is used to convert the received data chunk into a string format.

        //When data is transmitted over the network, it is typically sent in binary or byte format. In the case of HTTP requests, the data is sent as a stream of bytes. By converting the chunk of data to a string, you can interpret and manipulate the data using string manipulation functions and methods.

        //In the given code, the received data is appended to the body variable as a string so that it can be parsed as JSON later on using JSON.parse(). JSON parsing requires the input to be in string format.

        //Converting the data chunk to a string allows you to work with it as text and perform operations such as concatenation, searching, and extracting information before further processing.
        console.log("hello");
      });
      req.on("end", () => {
        // This event is emitted when all the data has been received.
        const { email, password } = JSON.parse(body);
        if (!email || !password) {
          res.statusCode = 400;

          res.end(
            //When sending a response from the server to the client, the response body expects a string as its content.
            //JSON.stringify() converts a JavaScript object into a string representation in JSON format.
            JSON.stringify({
              status: false,
              error: "Email or password not found",
            })
          );
          return;
        }
        //The below block checks if there is already a user with the same email address in the data array.
        const existingUser = data.find(
          (val) => val.email === email && val.password === password
        );
        if (existingUser) {
          res.statusCode = 200;
          res.end(
            JSON.stringify({
              status: true,
              message: "User logged in successfully",
            })
          );
        } else {
          res.statusCode = 401;
          res.end(
            JSON.stringify({
              status: false,
              error: "Invalid username or password",
            })
          );
        }
      });
    } else {
      res.statusCode = 404;
      res.end(JSON.stringify({ error: "URL not found" }));
    }
  }
});

// The placement within the code does not affect the actual startup of the server.
// The reason it is typically placed at the end of the code or after all the necessary configurations is for better code organization and to ensure that all the required setup has been completed before the server starts listening for incoming requests and send appropriate responses.
app.listen(PORT, () => {
  console.log("Server is running at port ", PORT);
});

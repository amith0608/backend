# YouTube-Subscribers---Backend-Proj_Almabetter

My backend project runs like below:

* http://localhost:3000/ ---> 
{"message":"Hi!, this is Amith B N, Backend capestone project - Get Youtube subscribers--- 1. To get all the subscribers details, 2. To get only the subscriber names, 3. To get a subscriber detail given by ID as an object, 4. Showing an error message for wrong ID"}

** http://localhost:3000/subscribers --->
[{"_id":"63eb9a1ff7881fd907fb370b","name":"Jeread Krus","subscribedChannel":"CNET","subscribedDate":"2023-02-14T14:26:39.783Z","__v":0},{"_id":"63eb9a1ff7881fd907fb370c","name":"John Doe","subscribedChannel":"freeCodeCamp.org","subscribedDate":"2023-02-14T14:26:39.783Z","__v":0},{"_id":"63eb9a1ff7881fd907fb370d","name":"Lucifer","subscribedChannel":"Sentex","subscribedDate":"2023-02-14T14:26:39.783Z","__v":0}]

*** http://localhost:3000/subscribers/name --->
[{"name":"Jeread Krus","subscribedChannel":"CNET"},{"name":"John Doe","subscribedChannel":"freeCodeCamp.org"},{"name":"Lucifer","subscribedChannel":"Sentex"}]

**** http://localhost:3000/subscribers/63eb9a1ff7881fd907fb370b --->
{"_id":"63eb9a1ff7881fd907fb370b","name":"Jeread Krus","subscribedChannel":"CNET","subscribedDate":"2023-02-14T14:26:39.783Z","__v":0}

***** http://localhost:3000/subscribers/63eb9a1ff7881fd907fb370bd
{"message":"Error! Please check the id"}

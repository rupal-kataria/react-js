{/* <div class="parent">
    <div id="child">
        <h1>Hello world</h1>
        <h2>child1</h2>
    </div>
    
</div> */}


const heading = React.createElement("div",
        {"id":'parent'},
       [ React.createElement("div",{'id':'child1'},
       [React.createElement("h1",{},"Hello World from React!"),
       React.createElement("h1",{},"Hello Child1!")
   ]),
   React.createElement("div",{'id':'child2'},
   [React.createElement("h1",{},"Hello World from React!"),
   React.createElement("h1",{},"Hello Child1!")
])]
        )


    const root = ReactDOM.createRoot(document.getElementById("root"))

    root.render(heading);
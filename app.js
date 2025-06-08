





// const parent = React.createElement("div", {id : "parent"},React.createElement("div",{id : "child"},React.createElement("h1",{},"this is my react <3") ));





const parent = React.createElement("div",{id : "parent"}, React.createElement("div",{id : "child"},[React.createElement("h1",{id : "h1"},"this is h1"),React.createElement("h2",{id:"h2"},"this is h2")] ))




// const heading = React.createElement("h1",{id : "heading"},"this is my react <3");

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
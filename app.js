//const heading = React.createElement("h1", {id:"heading"}, "Hellow world from react!");


const parent = React.createElement("div", { id: "parent" },
    [React.createElement("div", { id: "child1" },
        [React.createElement("h1", {}, "Hi from h1 tag!"),
        React.createElement("h2", {}, "Hi from h2 tag!")]),
    React.createElement("div", { id: "child2" },
        [React.createElement("h3", {}, "Hi from h3 tag!"),
        React.createElement("h4", {}, "Hi from h4 tag!")])]
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

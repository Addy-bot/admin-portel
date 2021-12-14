import React, {Component} from 'react'

class AddItem extends Component {
    
    state = {
    Name: "",
    Price: "",
    Shop_Address: ""
  };

  add = (e) => {
    e.preventDefault();
    
    this.props.addItemHandler(this.state);
    this.setState({ Name: "", Price: "", Shop_Address: "" });
  };

render() {
      return (
        <>
          <div className="main">
            <div className="container" style={{ marginTop: "30px" }}>
              <form
                class="ui form"
                onSubmit={this.add}
                style={{
                  borderStyle: "ridge",
                  borderWidth: "10px",
                  borderColor: "black",
                  marginLeft: "40px",
                  marginRight: "40px",                  
                  backgroundColor: "#DBD0C0",                
                }}
              >
                <div className="field" style={{ margin: "50px" }}>
                  <label>
                    <h3> Enter your Task :</h3>
                  </label>
                  <input
                    type="text"
                    name="first-name"
                    placeholder="Product Name"
                    value={this.state.Name}
                    onChange={(e) => this.setState({ Name: e.target.value })}
                  />
                </div>
                <div className="field" style={{ margin: "50px" }}>
                  <label>
                    <h3>Enter your Time :</h3>
                  </label>
                  <input
                    type="text"
                    name="last-name"
                    placeholder="Product Price"
                    value={this.state.Price}
                    onChange={(e) => this.setState({ Price: e.target.value })}
                  />
                </div>          
                <button
                  class="ui button"
                  type="submit"
                  style={{
                    backgroundColor: "navy",
                    color: "whitesmoke",
                    marginBottom: "30px",
                    marginLeft: "340px",
                  }}
                >
                  <h3>Submit</h3>
                </button>               
              </form>
            </div>
          </div>
        </>
      );
      }
}

export default AddItem

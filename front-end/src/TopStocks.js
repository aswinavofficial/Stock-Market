import React from "react";

// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

class TopStockComponent extends React.Component {
  
    constructor() {
        super();
        this.state = {
          data: [],
          isLoaded: false,
        };
      }


  componentDidMount() {
    fetch("http://localhost:3004/api/latest")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            data: result,
            isLoaded: true,
          });
          console.log(result)
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }
  render() {
    const { data,isLoaded } = this.state;
    if (!isLoaded) {
        return <div>Loading...</div>;
      }
     else 
     { 
    return (
      <div>

<Breadcrumb>
        <BreadcrumbItem><a href="/">Home</a></BreadcrumbItem>
        <BreadcrumbItem active>Top Stocks</BreadcrumbItem>
      </Breadcrumb>
    
   <br/> 



        <ReactTable
          data={data}
          columns={[
            {
              Header: "Symbol",
              accessor: 'symbol'
            },
            {
              Header: "Open",
              accessor: 'open'
            },
            {
              Header: 'Close',
              accessor: 'close'
            },
            {
                Header: 'Low',
                accessor: 'low'
            },
            {
                Header: 'High',
                accessor: 'high'
            },
            {
                Header: 'Volume',
                accessor: 'volume'
            }
          ]}
          defaultPageSize={10}
          defaultSorted={[
            {
              id: "close",
              desc: true
            },
            {
              id: "volume",
              desc:true
            }
          ]}
          className="-striped -highlight"
        />


        <br />
      </div>
    );
        }
  }
}

export default TopStockComponent;





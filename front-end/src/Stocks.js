import React from "react";

// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

class StockComponent extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      data: [],
      date : '2016-09-12'
    };
  }

  handleChange(event) {
    this.setState({date: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch("http://localhost:3004/api/stock/"+this.state.date)
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          data: result
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


  componentDidMount() {
    fetch("http://localhost:3004/api/stock/"+this.state.date)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            data: result
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
    const { data } = this.state;
    return (
      <div>

<Breadcrumb>
        <BreadcrumbItem><a href="/">Home</a></BreadcrumbItem>
        <BreadcrumbItem active>Stock on a Date</BreadcrumbItem>
      </Breadcrumb>
    <Container>
    <Row>
          <Col sm="12" md={{ size: 6, offset: 3 }}>
          <Form inline onSubmit={this.handleSubmit}>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="date" className="mr-sm-2">Date</Label>
          <Input type="text" name="date" id="date" value={this.state.value} onChange={this.handleChange} placeholder="2016-09-12" />
        </FormGroup>
        <Button>Submit</Button>
</Form>
          
          
          </Col>
    </Row>
    </Container>
   <br/> 

{/* <form onSubmit={this.handleSubmit}>
       
       Date : 
       <input type="text" value={this.state.value} onChange={this.handleChange} /> <br/>

       <input type="submit" value="Submit" />
     </form> */}

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
          className="-striped -highlight"
        />


        <br />
      </div>
    );
  }
}

export default StockComponent;


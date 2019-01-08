import React, { Component } from 'react';
// import 'react-day-picker/lib/style.css';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';




import ReactChartkick, { LineChart } from 'react-chartkick'
import Chart from 'chart.js'

ReactChartkick.addAdapter(Chart)


class ChartComponent extends Component {

  constructor(props) {
    super(props);
    this.handleDayChange1 = this.handleDayChange1.bind(this);
    this.handleDayChange2 = this.handleDayChange2.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      error: null,
      isLoaded: false,
      items :undefined,
      selectedDay1: undefined,
      selectedDay2: undefined,
      company : undefined
    };
  }

  handleChange(event) {
    this.setState({company: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    var query ="?day1="+this.state.selectedDay1+"&day2="+this.state.selectedDay2;
    fetch("http://localhost:3004/api/chart/"+this.state.company+query)
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result)
          this.setState({
            isLoaded: true,
            items: result
          });
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

  handleDayChange1(event) {
    this.setState({ selectedDay1: event.target.value });
  }

  handleDayChange2(event) {
    this.setState({ selectedDay2: event.target.value });
  }

  componentDidMount() {
    fetch("http://localhost:3004/api/chart/ACN?day1=2016-12-01&day2=2016-12-30")
      .then(res => res.json())
      .then(
        (result) => {
          console.log("Items"+typeof this.state.items)
          this.setState({
            isLoaded: true,
            items: result
          });
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
    
    // const { selectedDay1, selectedDay2 } = this.state;
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    }
    else
    {
    return (
      <div className="App">

<Breadcrumb>
        <BreadcrumbItem><a href="/">Home</a></BreadcrumbItem>
        <BreadcrumbItem active>Analytics</BreadcrumbItem>
      </Breadcrumb>
    <Container>
    <Row>
          <Col sm="12">
          <Form inline onSubmit={this.handleSubmit}>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="company" className="mr-sm-2">Company Symbol:</Label>
          <Input type="text" name="company" id="company" value={this.state.value} onChange={this.handleChange} placeholder="PCLN" />
        </FormGroup>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="from" className="mr-sm-2">From:</Label>
          <Input type="text" name="from" id="from"  onChange={this.handleDayChange1} placeholder="2016-12-22" />
        </FormGroup>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="to" className="mr-sm-2">To:</Label>
          <Input type="text" name="to" id="to" onChange={this.handleDayChange2} placeholder="2016-12-30" />
        </FormGroup>
        <Button>Submit</Button>
</Form>
          
          
          </Col>
    </Row>
    </Container>
   <br/> 

       {/* <form onSubmit={this.handleSubmit}>
       
        Company: 
        <input type="text" value={this.state.value} onChange={this.handleChange} /> <br/>
       From : <input type="text" onChange={this.handleDayChange1} /> <br/>
       To : <input type="text"  onChange={this.handleDayChange2} /> <br/>

        <input type="submit" value="Submit" />
      </form> */}
         
         {/* {selectedDay1 && <p> {selectedDay1.toLocaleDateString()}</p>}
        {!selectedDay1 && <p>From :</p>}
        <DayPickerInput onDayChange={this.handleDayChange1} /> */}


        {/* {selectedDay2 && <p> {selectedDay2.toLocaleDateString()}</p>}
        {!selectedDay2 && <p>To : </p>}
        <DayPickerInput  onDayChange={this.handleDayChange2} /> */}
      
      
          <LineChart data={items} />
      </div>
    );
  }
  }
}

export default ChartComponent;
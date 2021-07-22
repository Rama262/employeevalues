import React, { Component } from 'react'
import '../App.css';
export class Input extends Component {
    state = {
        name: '',
     employees : [
            {Id:100,Name:'Ram',Location:'Bangalore',Salary:150000,Manager_ID:''},
            {Id:101,Name:'Abhi',Location:'Hyderabad',Salary:80000,Manager_ID:100},
            {Id:102,Name:'Suri',Location:'Chennai',Salary:60000,Manager_ID:100},
            {Id:103,Name:'Surendra',Location:'Pune',Salary:40000,Manager_ID:101},
            {Id:104,Name:'Madhu',Location:'Bangalore',Salary:25000,Manager_ID:101},
            {Id:105,Name:'Ganga',Location:'Hyderabad',Salary:25000,Manager_ID:100},
            {Id:106,Name:'Manohar',Location:'Bangalore',Salary:45000,Manager_ID:102},
            {Id:107,Name:'Sham',Location:'Hyderabad',Salary:35000,Manager_ID:102},
            {Id:108,Name:'Gopi',Location:'Chennai',Salary:25000,Manager_ID:104},
            {Id:109,Name:'Hari',Location:'Pune',Salary:26000,Manager_ID:104},
            {Id:110,Name:'Soumya',Location:'Bangalore',Salary:70000,Manager_ID:100},
          ],
          users:[],
          users2:[]
    }
   
    
    handleChange = (e) => {
        this.setState({
            name: e.target.value
        });
    }
    submitform=(e)=>{
        e.preventDefault();
        if(this.state.name !== '' ){
            let empname=this.state.employees.filter(item=>item.Name.toLowerCase()===this.state.name.toLowerCase())?.[0]?.Name;
            let tempid=this.state.employees.filter(item=>item.Name.toLowerCase()===this.state.name.toLowerCase())?.[0]?.Id
            let Manager_IDCount=this.state.employees.filter(item=>item.Manager_ID===tempid).length
            
                empname && this.setState({
                    users:[...this.state.users,{ Name : empname,
                      value :Manager_IDCount,},this.state.name=''
                      ]
                  });
            
            
           //second columntable 
            const dup = this.state.employees.reduce((a, y) => {
                a[y[this.state.name]] = ++a[y[this.state.name]] || 0;
                return a;
              }, {});
                if (this.state.name === "Salary" || this.state.name === "Manager_ID") {
                    let tempKeys = []
                    for(let k in dup){
                      if(dup[k]>0){
                        tempKeys.push({ Name: this.state.name, count: dup[k]+1, value: k })
                      }
                    }
            this.setState({
                      users2: [
                        ...this.state.users2,
                        ...tempKeys,
                        
                      ],
                      name : ""
              });
            }
          }
};
    render() {
        return (
            <div>
             <div className="input-group" style={{width:"50%",margin:"50px"}}>
                <input type="text" value={this.state.name} className="form-control input-grp" id="name" placeholder="Enter here" onChange={this.handleChange} />
                <div className="input-group-append">
                    <button onClick={this.submitform} className="btn btn-primary" type="button" id="button-addon2">Submit</button>
                </div>
                </div>
                <br></br>
                 <div className = "row" >
                 <div className="col-6">
                 <h5 style={{textAlign:"center",margin:"10px"}}>Manager Details (Label)</h5>
                        <table className = "table table-striped table-bordered" style={{margin:"50px"}}>
                            <thead>
                                <tr>
                                    <th> Manager Name</th>
                                    <th> Head Count</th>
                                    
                                </tr>
                            </thead>
                            <tbody>
                            { this.state.users.map(user => {
                            return(
                                <tr>
                          <td>{user.Name}</td>
                         <td>{user.value}</td>
                        </tr>
                             )})}
                            </tbody>
                        </table>
                        </div>

                        
</div>
 <br></br>
                 <div className = "row" >
                 <div className="col-6">
                 <h5 style={{textAlign:"center",margin:"10px"}}>Column Level   Duplicates  </h5>
                        <table className = "table table-striped table-bordered" style={{margin:"50px"}}>
                            <thead>
                                <tr>
                                    <th> Column Name</th>
                                    <th> Value</th>
                                    <th>Count</th>
                                    
                                </tr>
                            </thead>
                             <tbody>
                            { this.state.users2.map(user2 => {
                            return(
                                <tr>
                          <td>{user2.Name}</td>
                         <td>{user2.value}</td>
                         <td>{user2.count}</td>
                        </tr>
                             )})}
                            </tbody> 
                        </table>
                        </div>
                        </div>
            </div>
        )
    }
}

export default Input

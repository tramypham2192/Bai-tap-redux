import React, { Component } from 'react'
import { connect } from 'react-redux'
import './App.css'

class App extends Component {
  render() {
    let { saladReducer, cheeseReducer, beefReducer } = this.props
    console.log(this.props)
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-md-6'>
            <div className='breadTop'></div>
            <div className='salad'></div>
            <div className='beef'></div>
            <div className='cheese'></div>
            <div className='breadBottom'></div>
          </div>
        <div className='col-md-6'>
          <h3>Chon thuc an</h3>
          <table className='table'>
            <tbody><tr>
              <th>Thuc an</th>
              <th>            </th>
              <th>Don gia</th>
              <th>Thanh tien</th>
            </tr>
              <tr>
                <td>salad</td>
                <td>
                  <button type="button" onClick={() => {
                    //tao object action
                    const action = {
                      type: 'TANG_SALAD',
                      payload: 1
                    }
                    this.props.dispatch(action)
                  }}>+</button>
                  <p>{saladReducer}</p>
                  <button type="button" onClick={() => {
                    //tao object action
                    const action = {
                      type: 'GIAM_SALAD',
                      payload: 1
                    }
                    this.props.dispatch(action)
                  }}>-</button>
                </td>
                <td>10</td>
                <td>{saladReducer * 10}</td>
              </tr>
              <tr>
                <td>cheese</td>
                <td>
                  <button type="button" onClick={() => {
                    //tao object action
                    const action = {
                      type: 'TANG_CHEESE',
                      payload: 1
                    }
                    this.props.dispatch(action)
                  }}>+</button>
                  <p>{cheeseReducer}</p>
                  <button type="button" onClick={() => {
                    //tao object action
                    const action = {
                      type: 'GIAM_CHEESE',
                      payload: 1
                    }
                    this.props.dispatch(action)
                  }}>-</button>
                </td>
                <td>20</td>
                <td>{cheeseReducer * 20}</td>
              </tr>
              <tr>
                <td>beef</td>
                <td>
                  <button type="button" onClick={() => {
                    //tao object action
                    const action = {
                      type: 'TANG_BEEF',
                      payload: 1
                    }
                    this.props.dispatch(action)
                  }}>+</button>
                  <p>{beefReducer}</p>
                  <button type="button" onClick={() => {
                    //tao object action
                    const action = {
                      type: 'GIAM_BEEF',
                      payload: 1
                    }
                    this.props.dispatch(action)
                  }}>-</button>
                </td>
                <td>35</td>
                <td>{beefReducer * 35}</td>
              </tr>
              <tr>
                <td />
                <td />
                <td>Tong cong</td>
                <td>{saladReducer * 10 + cheeseReducer * 20 + beefReducer * 35}</td>
              </tr>
            </tbody>
          </table>
        </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  saladReducer: state.saladReducer,
  cheeseReducer: state.cheeseReducer,
  beefReducer: state.beefReducer
})

export default connect(mapStateToProps)(App)
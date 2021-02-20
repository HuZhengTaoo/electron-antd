import React from 'react'
import { Button } from 'antd'

export default class Home extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="flex column">
        <h2>App is OK</h2>
        <hr/>
        <Button onClick={() => {
          this.props.hiimport React, { useState,useEffect} from 'react'
import { Table, Tag } from 'antd';
import { info,brokers} from '../../dataStruct'
function Home() {
  const [columns, setColumns] = useState()
  const [dataSource,setDataSource] = useState()
  useEffect(() => { 
    setColumns(Object.assign(renderBrokers(brokers), _columns))
    setDataSource([{
      key: 1,
      username: 'xl',
      name: '快手',
      total_price: '2020',
      pecent: '18%',
      '华泰': '1',
      '富途':'2'
    }])
  },[])
  const _columns = [
    {
      title: 'username',
      dataIndex: 'username',
      key: 'username'
    },
    {
      title: 'name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'total_price',
      dataIndex: 'total_price',
      key: 'total_price'
    },
    {
      title: 'pecent',
      dataIndex: 'pecent',
      key: 'pecent',
    }
  ]



  // const dataSource = [
  //   {
  //     key: '1',
  //     name: 'John Brown',
  //     age: 32,
  //     address: 'New York No. 1 Lake Park',
  //     tags: ['nice', 'developer'],
  //   }
  // ];
  const renderBrokers = (brokers) => { 
    var brokersList = [];
    for (var i = 0; i < brokers.length; i++) {
      brokersList.push({
          title: brokers[i].name,
          key: brokers[i].id,
          dataIndex: brokers[i].name,
      })
    }
    return brokersList
  }
  return (
    <div>
      {
        dataSource && columns && <Table dataSource={dataSource} columns={columns} />
      }
      
    </div>
  )
}

export default Homestory.push('/demo')
        }}>demo home</Button>
        <br />
        <Button onClick={() => {
          this.props.history.push('/demo/1')
        }}>demo 1</Button>
        <br />
        <Button onClick={() => {
          this.props.history.push('/demo/2')
        }}>demo 2</Button>
        <br />
        <Button onClick={() => {
          $api.createWindow('about')
        }}>about</Button>
      </div>
    )
  }

} // class Home end
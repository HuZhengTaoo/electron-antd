import React, { useState,useEffect} from 'react'
import { Table, Tag } from 'antd';
import  axios from 'axios'
import { info,brokers} from '../../dataStruct'
function Home() {
  const [columns, setColumns] = useState()
  const [dataSource,setDataSource] = useState()
  useEffect(() => { 
    setColumns(Object.assign(renderBrokers(brokers), _columns))
    setDataSource([{
     broker: '富途',
      raw_price: '92',
      stock_num: '20',
      goal_price: '120'
    }])
  
  },[])
  const _columns = [
    {
      title: '券商',
      dataIndex: 'broker',
    },
    {
      title: '成本价',
      dataIndex: 'raw_price',
    },
    {
      title: '数量',
      dataIndex: 'stock_num',
    },
    {
      title: '持仓收益率',
      dataInde:'profit_percent'
    },
    {
      title: '持仓收益',
      dataIndex:'profit'
    },
    {
      title: '杠杆率',
      dataIndex:'lever_percent'
    },
    {
      title: '目标价',
      dataIndex: 'goal_price',
    },
    {
      title: '理想收益率',
      dataIndex:'goal_percent'
    },
    {
      title: '理想收益金额',
      dataIndex:'goal_money'
    },
    {
      title: '距离收益价格',
      dataIndex: 'distance_goal_price'
    },
    {
      title: '距离收益率',
      dataIndex:'distance_goal_percent'
    }
  ]
  const columns = [
    {
      title: 'stock_name',
      dataIndex:'股票名称'
    },
    {
      title: 'stock_code',
      dataIndex:'股票代码',
    },
    {
      title: 'total_num',
      dataIndex:'总体数量'
    },
    {
      title: '平均成本',
      dataIndex:''
    }
  ]
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
        <>
          <Table dataSource={dataSource1} columns={columns1} />
          <Table dataSource={dataSource} columns={columns} />
        </>
      }
      
    </div>
  )
}

export default Home
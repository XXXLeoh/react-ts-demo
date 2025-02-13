import React, { FC } from 'react'
import './List1.css'

const List1: FC = () => {
  const questionList = [
    { id: 'q1', title: '问卷1', isPublish: true },
    { id: 'q2', title: '问卷2', isPublish: false },
    { id: 'q3', title: '问卷3', isPublish: true },
    { id: 'q4', title: '问卷4', isPublish: false },
    { id: 'q5', title: '问卷5', isPublish: true },
  ]
  function edit(id: string) {
    console.log('编辑问卷', id)
  }

  return (
    <div>
      <h1>问卷列表页</h1>
      <div>
        {questionList.map(question => {
          const { id, title, isPublish } = question
          return (
            <div key={id} className="list-item">
              <strong>{title}</strong>
              &nbsp;
              {/* 条件判断 */}
              {isPublish ? (
                <span style={{ color: 'green' }}>已发布</span>
              ) : (
                <span style={{ color: 'red' }}>未发布</span>
              )}
              &nbsp;
              <button
                onClick={() => {
                  edit(id)
                }}
              >
                编辑问卷
              </button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default List1

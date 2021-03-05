import React from 'react'
import './Text.css'

export default function Text({ head, body }) {
      return (
            <div className='elec_table '>
                  <h1 className='elec_main'>{head}</h1>
                  <h2 className='elec_sub'>{body}</h2>
            </div>
      )
}

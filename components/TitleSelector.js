// @flow

import React from 'react'
import { eligibleTitles } from '../constants'
import type { MilestoneMap } from '../constants'

type Props = {
  milestoneByTrack: MilestoneMap,
  currentTitle: String,
  setTitleFn: (string) => void
}

class TitleSelector extends React.Component {
  render() {
    const titles = eligibleTitles(this.props.milestoneByTrack)
    /* dropdown menu to select titles disabled for now because of reasons */
    // return <select value={this.props.currentTitle} onChange={e => this.props.setTitleFn(e.target.value)}>
    //   <style jsx>{`
    //     select {
    //       font-size: 20px;
    //       line-height: 20px;
    //       margin-bottom: 20px;
    //       min-width: 300px;
    //     }
    //   `}</style>
    //   {titles.map(title => (
    //     <option key={title}>
    //       {title}
    //     </option>
    //   ))}
    // </select>
    return <h3>Job Title: <em>{this.props.currentTitle}</em></h3>
  }
}

export default TitleSelector

import CrochetStyle from '../styles/crochet-chart.module.css'
import KnitStyle from '../styles/knit-chart.module.css'

export default function BlankStitch(props) {
  const style = props.style
  let use = CrochetStyle.box + ' ' + CrochetStyle.stitch
  if(style === 'knit') use = KnitStyle.box + ' ' + KnitStyle.stitch

  return(
    <td><div className={ use }></div></td>
  )
}
import CrochetStyle from '../styles/crochet-chart.module.css'
import KnitStyle from '../styles/knit-chart.module.css'

export default function StitchMenu(props) {
  const style = props.style

  if(style == 'knit') {
    return (
      <>
        <div className='dropdown-divider'></div>
        <div className={ KnitStyle.box + ' color-item' }></div>
        <div className='dropdown-divider'></div>
        <div className={ KnitStyle.box + ' menu-item' }></div>
        <div className={ KnitStyle.box + ' menu-item ' + KnitStyle.purl }></div>
        <div className={ KnitStyle.box + ' menu-item ' + KnitStyle.yo }></div>
        <div className={ KnitStyle.box + ' menu-item ' + KnitStyle.k2tog }></div>
        <div className={ KnitStyle.box + ' menu-item ' + KnitStyle.p2tog }></div>
        <div className={ KnitStyle.box + ' menu-item ' + KnitStyle.ssk }></div>
        <div className={ KnitStyle.box + ' menu-item ' + KnitStyle.ssp }></div>
        <div className={ KnitStyle.box + ' menu-item ' + KnitStyle.k1fb }></div>
        <div className={ KnitStyle.box + ' menu-item ' + KnitStyle.mkk }></div>
        <div className={ KnitStyle.box + ' menu-item ' + KnitStyle.mpp }></div>
        <div className={ KnitStyle.box + ' menu-item ' + KnitStyle.rsm }></div>
        <div className={ KnitStyle.box + ' menu-item ' + KnitStyle.lsm }></div>
        <div className={ KnitStyle.box + ' menu-item ' + KnitStyle.rsli }></div>
        <div className={ KnitStyle.box + ' menu-item ' + KnitStyle.lsli }></div>
        <div className={ KnitStyle.box + ' menu-item ' + KnitStyle.slpwyb }></div>
        <div className={ KnitStyle.box + ' menu-item ' + KnitStyle.slpwyf }><i></i></div>
        <div className={ KnitStyle.box + ' menu-item ' + KnitStyle.k3tog }><i></i></div>
        <div className={ KnitStyle.box + ' menu-item ' + KnitStyle.p3tog }><i></i></div>
        <div className={ KnitStyle.box + ' menu-item ' + KnitStyle.sk2p }><i></i></div>
        <div className={ KnitStyle.box + ' menu-item ' + KnitStyle.sssp }><i></i></div>
        <div className={ KnitStyle.box + ' menu-item ' + KnitStyle.s2kp2 }></div>
        <div className={ KnitStyle.box + ' menu-item ' + KnitStyle.k1tbl }></div>
        <div className={ KnitStyle.box + ' menu-item ' + KnitStyle.p1tbl }><i></i></div>
        <div className={ KnitStyle.box + ' menu-item ' + KnitStyle.bobble }></div>
        <div className={ KnitStyle.box + ' menu-item ' + KnitStyle.nost }></div>
        <div className={ KnitStyle.box + ' menu-item ' + KnitStyle.inc1to3 }></div>
        <div className={ KnitStyle.box + ' menu-item ' + KnitStyle.inc1to4 }></div>
        <div className={ KnitStyle.box + ' menu-item ' + KnitStyle.inc1to5 }></div>
        <div className={ KnitStyle.box + ' menu-item ' + KnitStyle.dec4to1rs }></div>
        <div className={ KnitStyle.box + ' menu-item ' + KnitStyle.dec4to1ls }></div>
        <div className={ KnitStyle.box + ' menu-item ' + KnitStyle.dec4to1cen }></div>
        <div className={ KnitStyle.box + ' menu-item ' + KnitStyle.dec5to1 }></div>
        <div className={ KnitStyle.box + ' menu-item ' + KnitStyle.k1yo2 }></div>
        <div className={ KnitStyle.box + ' menu-item ' + KnitStyle.bindo }></div>
        <div className={ KnitStyle.box + ' menu-item ' + KnitStyle.strn }></div>
        <div className={ KnitStyle.box + ' menu-item ' + KnitStyle.caston }></div>
      </>
    )
  }

  return(
    <>
      <div className='dropdown-divider'></div>
      <div className={ CrochetStyle.box + ' color-item' }></div>
      <div className='dropdown-divider'></div>
      <div className={ CrochetStyle.box + ' menu-item' }></div>
      <div className={ CrochetStyle.box + ' menu-item ' + CrochetStyle.ch }></div>
      <div className={ CrochetStyle.box + ' menu-item ' + CrochetStyle.slst }></div>
      <div className={ CrochetStyle.box + ' menu-item ' + CrochetStyle.sc }></div>
      <div className={ CrochetStyle.box + ' menu-item ' + CrochetStyle.hdc }></div>
      <div className={ CrochetStyle.box + ' menu-item ' + CrochetStyle.hdc + ' ' + CrochetStyle.dc }><i></i></div>
      <div className={ CrochetStyle.box + ' menu-item ' + CrochetStyle.hdc + ' ' + CrochetStyle.tr }><i></i></div>
      <div className={ CrochetStyle.box + ' menu-item ' + CrochetStyle.hdc + ' ' + CrochetStyle.tr + ' ' + CrochetStyle.dtr }><i></i><b></b></div>
      <div className={ CrochetStyle.box + ' menu-item ' + CrochetStyle.sc2tog }><i></i></div>
      <div className={ CrochetStyle.box + ' menu-item ' + CrochetStyle.sc2tog + ' ' + CrochetStyle.sc3tog }><i></i><b></b></div>
      <div className={ CrochetStyle.box + ' menu-item ' + CrochetStyle.sc2tog + ' ' + CrochetStyle.dc2tog }><i></i><b></b></div>
      <div className={ CrochetStyle.box + ' menu-item ' + CrochetStyle.sc2tog + ' ' + CrochetStyle.dc2tog + ' ' + CrochetStyle.dc3tog }><i></i><b></b><u></u></div>
      <div className={ CrochetStyle.box + ' menu-item ' + CrochetStyle.tdccluster }><i></i><b></b><u></u></div>
      <div className={ CrochetStyle.box + ' menu-item ' + CrochetStyle.tdccluster + ' ' + CrochetStyle.thdccluster }><i></i></div>
      <div className={ CrochetStyle.box + ' menu-item ' + CrochetStyle.fdcpop }><i></i><b></b><u></u><del></del><ins></ins></div>
      <div className={ CrochetStyle.box + ' menu-item ' + CrochetStyle.fdcshell }><i></i><b></b><u></u><del></del><ins></ins><big></big><small></small></div>
      <div className={ CrochetStyle.box + ' menu-item ' + CrochetStyle.ch3picot }><i></i></div>
      <div className={ CrochetStyle.box + ' menu-item ' + CrochetStyle.fpdc }><i></i></div>
      <div className={ CrochetStyle.box + ' menu-item ' + CrochetStyle.bpdc }><i></i></div>
      <div className='dropdown-divider'></div>
      <div className={ CrochetStyle.box + ' menu-item ' + CrochetStyle.blo }></div>
      <div className={ CrochetStyle.box + ' menu-item ' + CrochetStyle.flo }></div>
    </>
  )
}
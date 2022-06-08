import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'

import Navbar from '../../../components/navbar'
import styles from '../../../styles/knit-chart.module.css'

export default function Home() {
  const router = useRouter()

  return (
    <>
      <Head>
        <title>Knit symbols legend</title>
      </Head>

      <div className='jumbotron'>
        <h1 className='display-4'>CSS knit chart symbols</h1>
        <p className='lead'>Craft yarn council standard knit chart symbols</p>
        <hr className='my-4' />
        <p>Adapted from <Link href='https://www.craftyarncouncil.com/standards/knit-chart-symbols' passHref><a target='_blank'>https://www.craftyarncouncil.com/standards/knit-chart-symbols</a></Link></p>
      </div>

      <Navbar active={ router.pathname } />

      <div className='row mb-5'>
        <div className='col'></div>
        <div className='col-6'>
          <table className='table'>
            <thead>
              <tr>
                <th scope='col'>Symbol</th>
                <th scope='col'>Stitch</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><div className={ styles.box }></div></td>
                <td>K on RS, P on WS</td>
              </tr>
              <tr>
                <td><div className={ styles.box + ' ' + styles.purl }></div></td>
                <td>P on RS, K on WS</td>
              </tr>
              <tr>
                <td><div className={ styles.box + ' ' + styles.yo }></div></td>
                <td>Yarn Over</td>
              </tr>
              <tr>
                <td><div className={ styles.box + ' ' + styles.k2tog }></div></td>
                <td>K2tog on RS, P2tog on WS</td>
              </tr>
              <tr>
                <td><div className={ styles.box + ' ' + styles.p2tog }></div></td>
                <td>P2tog on RS, K2tog on WS</td>
              </tr>
              <tr>
                <td><div className={ styles.box + ' ' + styles.ssk }></div></td>
                <td>SSK on RS, SSP on WS</td>
              </tr>
              <tr>
                <td><div className={ styles.box + ' ' + styles.ssp }></div></td>
                <td>SSP on RS, SSK on WS</td>
              </tr>
              <tr>
                <td><div className={ styles.box + ' ' + styles.k1fb }></div></td>
                <td>K1fb on RS, P1fb on WS</td>
              </tr>
              <tr>
                <td><div className={ styles.box + ' ' + styles.mkk }></div></td>
                <td>Make 1 (M1) knitwise on RS, Make 1 (M1) purlwise on WS</td>
              </tr>
              <tr>
                <td><div className={ styles.box + ' ' + styles.mpp }></div></td>
                <td>Make 1 (M1) purlwise on RS, Make 1 (M1) knitwise on WS</td>
              </tr>
              <tr>
                <td><div className={ styles.box + ' ' + styles.rsm }></div></td>
                <td>Right-slanting Make 1</td>
              </tr>
              <tr>
                <td><div className={ styles.box + ' ' + styles.lsm }></div></td>
                <td>Left-slanting Make 1</td>
              </tr>
              <tr>
                <td><div className={ styles.box + ' ' + styles.rsli }></div></td>
                <td>Right-slanting lifted inc</td>
              </tr>
              <tr>
                <td><div className={ styles.box + ' ' + styles.lsli }></div></td>
                <td>Left-slanting lifted inc</td>
              </tr>
              <tr>
                <td><div className={ styles.box + ' ' + styles.slpwyb }></div></td>
                <td>Sl 1 purlwise wyb on RS, Sl 1 purlwise wyf on WS</td>
              </tr>
              <tr>
                <td><div className={ styles.box + ' ' + styles.slpwyf }><i></i></div></td>
                <td>Sl 1 purlwise wyf on RS, Sl 1 purlwise wyb on WS</td>
              </tr>
              <tr>
                <td><div className={ styles.box + ' ' + styles.k3tog }><i></i></div></td>
                <td>K3tog on RS, P3tog on WS</td>
              </tr>
              <tr>
                <td><div className={ styles.box + ' ' + styles.p3tog }><i></i></div></td>
                <td>P3tog on RS, K3tog on WS</td>
              </tr>
              <tr>
                <td><div className={ styles.box + ' ' + styles.sk2p }><i></i></div></td>
                <td>SK2P on RS, SSSK on RS, SSSP on WS</td>
              </tr>
              <tr>
                <td><div className={ styles.box + ' ' + styles.sssp }><i></i></div></td>
                <td>SSSP on RS, SSSK on WS</td>
              </tr>
              <tr>
                <td><div className={ styles.box + ' ' + styles.s2kp2 }></div></td>
                <td>S2KP2 on RS, SSPP2 on WS</td>
              </tr>
              <tr>
                <td><div className={ styles.box + ' ' + styles.k1tbl }></div></td>
                <td>K1 tbl on RS, P1 tbl on WS</td>
              </tr>
              <tr>
                <td><div className={ styles.box + ' ' + styles.p1tbl }><i></i></div></td>
                <td>P1 tbl on RS, K1 tbl on WS</td>
              </tr>
              <tr>
                <td><div className={ styles.box + ' ' + styles.bobble }></div></td>
                <td>Bobble</td>
              </tr>
              <tr>
                <td><div className={ styles.box + ' ' + styles.nost }></div></td>
                <td>Sts do not exist in these areas of chart</td>
              </tr>
              <tr>
                <td><div className={ styles.box + ' ' + styles.inc1to3 }></div></td>
                <td>Inc 1-to-3</td>
              </tr>
              <tr>
                <td><div className={ styles.box + ' ' + styles.inc1to4 }></div></td>
                <td>Inc 1-to-4</td>
              </tr>
              <tr>
                <td><div className={ styles.box + ' ' + styles.inc1to5 }></div></td>
                <td>Inc 1-to-5</td>
              </tr>
              <tr>
                <td><div className={ styles.box + ' ' + styles.dec4to1rs }></div></td>
                <td>Dec 4-to-1 (right slanting)</td>
              </tr>
              <tr>
                <td><div className={ styles.box + ' ' + styles.dec4to1ls }></div></td>
                <td>Dec 4-to-1 (left slanting)</td>
              </tr>
              <tr>
                <td><div className={ styles.box + ' ' + styles.dec4to1cen }></div></td>
                <td>Dec 4-to-1 (centered)</td>
              </tr>
              <tr>
                <td><div className={ styles.box + ' ' + styles.dec5to1 }></div></td>
                <td>Dec 5-to-1</td>
              </tr>
              <tr>
                <td><div className={ styles.box + ' ' + styles.k1yo2 }></div></td>
                <td>K1, wrapping yarn twice around needle</td>
              </tr>
              <tr>
                <td><div className={ styles.box + ' ' + styles.bindo }></div></td>
                <td>Bind off</td>
              </tr>
              <tr>
                <td><div className={ styles.box + ' ' + styles.strn }></div></td>
                <td>St rem on right needle after last BO st</td>
              </tr>
              <tr>
                <td><div className={ styles.box + ' ' + styles.caston }></div></td>
                <td>Cast on</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className='col'></div>
      </div>
    </>
  )
}

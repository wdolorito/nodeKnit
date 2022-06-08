import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'

import Navbar from '../../../components/navbar'
import styles from '../../../styles/crochet-chart.module.css'

export default function Home() {
  const router = useRouter()

  return (
    <>
      <Head>
        <title>Crochet symbols legend</title>
      </Head>

      <div className='jumbotron'>
        <h1 className='display-4'>CSS crochet chart symbols</h1>
        <p className='lead'>Craft yarn council standard crochet chart symbols</p>
        <hr className='my-4' />
        <p>Adapted from <Link href='https://www.craftyarncouncil.com/standards/crochet-chart-symbols' passHref><a target='_blank'>https://www.craftyarncouncil.com/standards/crochet-chart-symbols</a></Link></p>
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
                <td><div className={ styles.box + ' ' + styles.ch }></div></td>
                <td>Chain (ch)</td>
              </tr>
              <tr>
                <td><div className={ styles.box + ' ' + styles.slst }></div></td>
                <td>Slip stitch (sl st)</td>
              </tr>
              <tr>
                <td><div className={ styles.box + ' ' + styles.sc }></div></td>
                <td>Single crochet (sc)</td>
              </tr>
              <tr>
                <td><div className={ styles.box + ' ' + styles.hdc }></div></td>
                <td>Half double crochet (hdc)</td>
              </tr>
              <tr>
                <td><div className={ styles.box + ' ' + styles.hdc + ' ' + styles.dc }><i></i></div></td>
                <td>Double crochet (dc)</td>
              </tr>
              <tr>
                <td><div className={ styles.box + ' ' + styles.hdc + ' ' + styles.tr }><i></i></div></td>
                <td>Treble crochet (tr)</td>
              </tr>
              <tr>
                <td><div className={ styles.box + ' ' + styles.hdc + ' ' + styles.tr + ' ' + styles.dtr }><i></i><b></b></div></td>
                <td>Double treble crochet (dtr)</td>
              </tr>
              <tr>
                <td><div className={ styles.box + ' ' + styles.sc2tog }><i></i></div></td>
                <td>sc2tog</td>
              </tr>
              <tr>
                <td><div className={ styles.box + ' ' + styles.sc2tog + ' ' + styles.sc3tog }><i></i><b></b></div></td>
                <td>sc3tog</td>
              </tr>
              <tr>
                <td><div className={ styles.box + ' ' + styles.sc2tog + ' ' + styles.dc2tog }><i></i><b></b></div></td>
                <td>dc2tog</td>
              </tr>
              <tr>
                <td><div className={ styles.box + ' ' + styles.sc2tog + ' ' + styles.dc2tog + ' ' + styles.dc3tog }><i></i><b></b><u></u></div></td>
                <td>dc3tog</td>
              </tr>
              <tr>
                <td><div className={ styles.box + ' ' + styles.tdccluster }><i></i><b></b><u></u></div></td>
                <td>3-dc cluster</td>
              </tr>
              <tr>
                <td><div className={ styles.box + ' ' + styles.tdccluster + ' ' + styles.thdccluster }><i></i></div></td>
                <td>3-hdc cluster/puff st/bobble</td>
              </tr>
              <tr>
                <td><div className={ styles.box + ' ' + styles.fdcpop }><i></i><b></b><u></u><del></del><ins></ins></div></td>
                <td>5-dc popcorn</td>
              </tr>
              <tr>
                <td><div className={ styles.box + ' ' + styles.fdcshell }><i></i><b></b><u></u><del></del><ins></ins><big></big><small></small></div></td>
                <td>5-dc shell</td>
              </tr>
              <tr>
                <td><div className={ styles.box + ' ' + styles.ch3picot }><i></i></div></td>
                <td>ch-3 picot</td>
              </tr>
              <tr>
                <td><div className={ styles.box + ' ' + styles.fpdc }><i></i></div></td>
                <td>front post dc (FPdc)</td>
              </tr>
              <tr>
                <td><div className={ styles.box + ' ' + styles.bpdc }><i></i></div></td>
                <td>back post dc (BPdc)</td>
              </tr>
              <tr>
                <td><div className={ styles.box + ' ' + styles.blo }></div></td>
                <td>worked in back loop only*</td>
              </tr>
              <tr>
                <td><div className={ styles.box + ' ' + styles.flo }></div></td>
                <td>worked in front loop only*</td>
              </tr>
            </tbody>
          </table>
          <div>*Symbol appears at base of stitch being worked</div>
        </div>
        <div className='col'></div>
      </div>
    </>
  )
}

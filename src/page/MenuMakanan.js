import React, { Component } from 'react'
import ListMakanan from '../listdata/ListMakanan'

export default class MenuMakanan extends Component {
    render() {
        return (
            <div>
                <h3>Daftar Makanan yang Disediakan</h3>
                <td>
                    <ListMakanan sumber="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/nasipadang.jpg" alt="Gambar Makanan 1"/>
                </td>
                <td>
                    <ListMakanan sumber="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sate.png" alt="Gambar Makanan 2"/>
                </td>
                <td>
                    <ListMakanan sumber="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sotolamongan.png" alt="Gambar Makanan 3"/>
                </td>
                <td>
                    <ListMakanan sumber="https://www.dbs.com/iwov-resources/images/newsroom/indonesia/Blog/masakan%20nusantara/nasi%20kentut.png" alt="Gambar Makanan 4"/>
                </td>
                <td>
                    <ListMakanan sumber="https://pesona.travel/media/nasi-kuning-sarapan-khas-nusantara-bermakna-mendalam_144651_1140.jpg" alt="Gambar Makanan 5"/>
                </td>
            </div>
        )
    }
}

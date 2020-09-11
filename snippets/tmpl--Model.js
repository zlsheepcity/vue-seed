/** Model Name
    2020.9.11
 */

import Dataman from '@/app/Dataman.js'

///*/// ---------------------------- constructor

let Model = function (dna) {

    let protein = {
        id:    null,
        name:  '',
        value: '',
    }

    Object.assign(this, protein, dna)

    let RNA = this

    RNA.Startup = Dataman => {
        RNA.Dataman = Dataman
    }
}

///*/// ---------------------------- export ready

export default Model

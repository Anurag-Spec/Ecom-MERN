import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faFacebook} from '@fortawesome/fontawesome-svg-core'

library.add(fab)


function Footer() {
    return (
        <div>
        <h3>Follow Us</h3>
        <div>
        <FontAwesomeIcon icon={faFacebook} />
        </div>
        </div>
    )
}

export default Footer

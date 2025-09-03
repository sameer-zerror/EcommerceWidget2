import React from 'react'
import styles from "@/components/Ecomwidget.module.css"
import Image from 'next/image'
import Link from 'next/link'
const EcomWidgetCard = ({imgSrc}) => {
  return (
   
<div className={styles.EcomHovercardwrapperInner}>
	<div className={styles.EcomWidgetcard_image}>
        <Image src={imgSrc} width={1000} height={1000} alt=''/>
    </div>
	<div className={styles.EcomWidgetcard_overlay}>
		<div className={styles.EcomWidgetcard_content}>
		<Link href="" className={styles.EcomWidgetcard_button}>Shop The Look</Link>
	</div>
	</div>
    </div>
  )
}

export default EcomWidgetCard;

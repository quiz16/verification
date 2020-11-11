import React, { useState, useRef } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import styles from '../styles/Home.module.css'
import { validate } from '../services/validatecode'

export default function Home() {
  const router = useRouter()
  const [value, setValue] = useState([])
  const messageEl = useRef(null)
  const submit = async () => {
    try {
      await validate(value)
      router.push('/success')
    } catch (error) {
      messageEl.current.style.display = 'block'
    }
  }

  const onChange = (e) => {
    const { target } = e
    const parent = target.parentNode
    const currentIndex = Array.prototype.indexOf.call(parent.children, target)
    const d = value
    if (!target.validity.valid) {
      target.value = isNaN(target.value) ? '' : target.value
      return moveFocus(target)
    }
    if (target.value.length > 1) {
      const split = target.value.split('')
      let childNodes = [...target.parentNode.childNodes]
      childNodes.splice(0, currentIndex)
      return childNodes.forEach((el, index) => {
        const latest = split[index]
        if (latest) {
          el.value = latest
          d[currentIndex + index] = latest
        }
        moveFocus(el)
      })
    }

    d[currentIndex] = target.value

    setValue(d)
    return moveFocus(target)
  }

  const moveFocus = (target) => {
    const len = target.value.length
    const hasNext = target.nextElementSibling !== null
    const hasPrev = target.previousElementSibling !== null
    if (len > 0 && hasNext) {
      target.nextElementSibling.focus()
    } else if (len < 1 && hasPrev) {
      target.previousElementSibling.focus()
    }
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Blys</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Verification code:
        </h1>
        <div className={styles.inputWrapper}>
          <input
            onChange={onChange}
            type="tel"
            pattern="[0-9]*"
            className={styles.input}
            autoFocus={true}
          />
          <input
            onChange={onChange}
            type="tel"
            pattern="[0-9]*"
            className={styles.input}
          />
          <input
            onChange={onChange}
            type="tel"
            pattern="[0-9]*"
            className={styles.input}
          />
          <input
            onChange={onChange}
            type="tel"
            pattern="[0-9]*"
            className={styles.input}
          />
          <input
            onChange={onChange}
            type="tel"
            pattern="[0-9]*"
            className={styles.input}
          />
          <input
            onChange={onChange}
            type="tel"
            pattern="[0-9]*"
            className={styles.input}
          />
        </div>
        <button className={styles.submit} onClick={submit}>Submit</button>
        <p className={styles.error} ref={messageEl} style={{display: 'none'}}>
          Invalid code!
        </p>
      </main>
      <footer className={styles.footer}>
          Reynald Jo Armonia
      </footer>
    </div>
  )
}

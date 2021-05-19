import React from "react"
import Link from "next/link";
import { Container } from "react-bootstrap"


export default function Menu({menuColor}) {
 

  return (
    <header
    className="menu"
    style={{ backgroundColor: menuColor || "transparent" }}
  >
    <Container>
      <ul>
        <li>
          <Link href="/">
                <a>
                    Home
                </a>
          </Link>
        </li>
        <li>
        <Link href="/">
                <a>
                    Home
                </a>
          </Link>
        </li>
        <li>
        <Link href="/">
                <a>
                    Home
                </a>
          </Link>
        </li>
      </ul>
    </Container>
  </header>
  )
}



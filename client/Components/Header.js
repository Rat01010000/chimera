import DOMPurify from 'isomorphic-dompurify'
import Image from 'next/image'

function Header(props) {

  const defaultOptions = {
    ALLOWED_TAGS: ['b', 'i', 'em', 'strong', 'a', 'br', 'h2'],
    ALLOWED_ATTR: ['href']
  };

  const sanitize = (dirty, options) => ({
    __html: DOMPurify.sanitize(
      dirty,
      { ...defaultOptions, ...options }
    )
  });

  const SanitizeHTML = ({ html, options }) => (
    <div dangerouslySetInnerHTML={sanitize(html, options)} />
  );

  const imgSrc = 'http://127.0.0.1:8000'
  return (
    <div>
      <h1>hello world!</h1>
      <ul>
        {props.cards.map((card) => (
          <div key={card.id}>
            <p>{card.title}</p>
            <Image src={imgSrc + card.image} width={200} height={200} />
            <SanitizeHTML html={card.body} />
          </div>
        ))}
      </ul>
    </div>
  )
}

export default Header

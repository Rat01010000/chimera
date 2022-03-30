import DOMPurify from 'isomorphic-dompurify'

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

  return (
    <div>
      <h1>hello world!</h1>
      <ul>
        {props.cards.map((card) => (
          <div key={card.id}>
            <p>{card.title}</p>
            <SanitizeHTML html={card.body} />
          </div>
        ))}
      </ul>
    </div>
  )
}

export default Header

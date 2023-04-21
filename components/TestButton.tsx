
type PropsType = {
  onClick: () => void
  className: string
  dataTestId: string
  title: string
}

export const TestButton = (props: PropsType) => {
  return (
    <div>
      <button
        onClick={props.onClick}
        className={props.className}
        data-testid={props.dataTestId}
      >
        {props.title}
      </button>
    </div>
  )
}
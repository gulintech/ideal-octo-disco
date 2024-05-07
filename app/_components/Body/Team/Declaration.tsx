function Declaration({ direction, position, title, text }: {
  direction: 'left' | 'right',
  position: 'top' | 'bottom',
  title: string,
  text: string
}) {
  return (
    <div className="flex flex-col m-[52px]">
      {position === 'top' &&
        <div className={`font-card-title ${direction === 'right' ? 'text-right' : ''}`}>{title}
        </div>
      }
      <div
        className={`font-declaration-text mt-[28px] max-w-[249px] ${direction === 'right' ? 'text-right' : ''}`}>
        {text}
      </div>

      {position === 'bottom' &&
        <div className={`font-card-title mt-[20px] ${direction === 'right' ? 'text-right' : ''}`}>{title}
        </div>
      }

    </div>
  );
}

export default Declaration;

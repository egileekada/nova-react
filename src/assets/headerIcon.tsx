
export default function RenderIcon(type: string) {
  switch (type) {
    case 'share':
      return (
        <svg className="w-[24px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path
            d="m3,15.5s2-3.5,8-3.5v4s6-6,6-6l-6-6v4c-8,0-8,7.5-8,7.5Z"
            className="stroke-current fill-current"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </svg>
      );
    case 'talk':
      return (
        <svg className="w-[24px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path
            d="m10,2C5.589,2,2,5.589,2,10c0,1.44.388,2.789,1.057,3.958l-1.018,3.055c-.09.27-.02.567.181.768.143.143.334.22.53.22.08,0,.16-.013.237-.039l3.055-1.018c1.169.669,2.518,1.057,3.958,1.057,4.411,0,8-3.589,8-8S14.411,2,10,2Z"
            className="fill-current"
          />
        </svg>
      );
    case 'hub':
      return (
        <svg className="w-[24px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <g className="stroke-current fill-current">
            <path
              d="m17,8c0,3.866-3.134,7-7,7s-7-3.134-7-7"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
            <line
              x1="10"
              y1="15"
              x2="10"
              y2="17"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
            <rect
              x="7"
              y="3"
              width="6"
              height="8"
              rx="3"
              ry="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </g>
        </svg>
      );
    case 'video':
      return (
        <svg className="w-[24px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <g className="fill-current">
            <polygon
              points="17.5 6 17.5 14 14 10 14 10 17.5 6"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
            <path d="m10.5,3h-5c-1.933,0-3.5,1.567-3.5,3.5v7c0,1.933,1.567,3.5,3.5,3.5h5c1.933,0,3.5-1.567,3.5-3.5v-7c0-1.933-1.567-3.5-3.5-3.5Z" />
          </g>
        </svg>
      );
    case 'settings':
      return (
        <svg className="w-[24px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <g className="fill-current">
            <path d="m12.578,11h4.322c-.463-2.282-2.48-4-4.899-4-.553,0-1.075.111-1.572.277l2.149,3.723Z" />
            <path d="m8.695,15.725l2.151-3.725-2.151-3.725c-1.032.916-1.695,2.237-1.695,3.725s.663,2.809,1.695,3.725Z" />
            <path d="m12.578,13l-2.149,3.723c.497.166,1.019.277,1.572.277,2.419,0,4.436-1.718,4.899-4h-4.322Z" />
            <path d="m23,13v-2h-2.059c-.102-.916-.343-1.791-.699-2.603l1.785-1.03-1-1.732-1.792,1.035c-.536-.726-1.177-1.366-1.903-1.903l1.035-1.792-1.732-1-1.03,1.785c-.813-.357-1.687-.598-2.603-.699V1h-2v2.059c-.916.102-1.791.343-2.603.699l-1.03-1.785-1.732,1,1.035,1.792c-.726.536-1.366,1.177-1.903,1.903l-1.792-1.035-1,1.732,1.785,1.03c-.357.813-.598,1.687-.699,2.603H1v2h2.059c.102.916.343,1.791.699,2.603l-1.785,1.03,1,1.732,1.792-1.035c.536.726,1.177,1.366,1.903,1.903l-1.035,1.792,1.732,1,1.03-1.785c.813.357,1.687.598,2.603.699v2.059h2v-2.059c.916-.102,1.791-.343,2.603-.699l1.03,1.785,1.732-1-1.035-1.792c.726-.536,1.366-1.177,1.903-1.903l1.792,1.035,1-1.732-1.785-1.03c.357-.813.598-1.687.699-2.603h2.059Zm-4-1c0,3.86-3.14,7-7,7s-7-3.14-7-7,3.14-7,7-7,7,3.14,7,7Z" />
          </g>
        </svg>
      );
    default:
      return null;
  }
};

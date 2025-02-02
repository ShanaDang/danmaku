import React from 'react';

const Checkbox = ({ checked }: { checked?: boolean }) => {
  return (
    <svg
      className="w-5 h-5 me-2 text-green-500 flex-shrink-0"
      style={{
        color: checked ? 'green' : 'gray',
      }}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 20 20">
      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
    </svg>
  );
};

const Kbd = (props: { text: string }) => (
  <kbd className="px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg">
    {props.text}
  </kbd>
);

const Options: React.FC = () => {
  return (
    <div className="flex">
      <aside className="flex flex-col gap-4 text-2xl bg-gray-100 h-screen p-6">
        <button className="text-blue-400">HELP</button>

        <hr />
        <a rel="noreferrer" target="_blank" href="https://github.com/debugtheworldbot/danmaku/issues">
          Feedback
        </a>
      </aside>
      <main className="flex-1 text-2xl p-8">
        <h2 className="mb-2 text-lg font-semibold text-gray-900">shortcuts</h2>

        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Key
                </th>
                <th scope="col" className="px-6 py-3">
                  Description
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b">
                <th scope="row" className="px-6 py-4 font-medium text-gray-500 whitespace-nowrap">
                  <Kbd text="Enter" />
                </th>
                <td className="px-6 py-4">Open danmaku send dashboard</td>
              </tr>
              <tr className="bg-white border-b">
                <th scope="row" className="px-6 py-4 font-medium text-gray-500 whitespace-nowrap">
                  <Kbd text="Ctrl + q" />
                  <span className="mx-2">or</span>
                  <Kbd text="Esc" />
                </th>
                <td className="px-6 py-4">
                  Close danmaku send dashboard(suggest use Ctrl + q, beacuse esc will quit fullscreen mode.)
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="mt-8 mb-2 text-lg font-semibold text-gray-900">Support operations</h2>
        <ul className="space-y-1 text-gray-500 list-inside">
          <li className="flex items-center gap-2">
            <Checkbox checked />
            Show comments with time tag as danmaku
          </li>
          <li className="flex items-center gap-2">
            <Checkbox checked />
            Show live chat messages as danmaku
          </li>
          <li className="flex items-center gap-2">
            <Checkbox checked />
            Send real time danmaku
          </li>
        </ul>
      </main>
    </div>
  );
};

export default Options;

export default function Table({ children }: { children: React.ReactNode }) {
    return (
      <div className="overflow-x-auto">
        <table className="min-w-full ">{children}</table>
      </div>
    )
  }
  
  Table.Head = ({ children }: { children: React.ReactNode }) => (
    <thead className="text-[#64748B] bg-[#F1F5F9] ">{children}</thead>
  )
  
  Table.Row = ({ children }: { children: React.ReactNode }) => (
    <tr className="border-b border-[#00000014]">{children}</tr>
  )
  
  Table.Cell = ({ children }: { children: React.ReactNode }) => (
    <td className="px-4 py-2">{children}</td>
  )
  Table.Th = ({children}:{children:React.ReactNode})=>(
    <th className="text-left px-4 py-2 text-[#8B95A6] ">{children}</th>
  )
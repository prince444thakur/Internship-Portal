import React from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from './ui/table'
import { Badge } from './ui/badge'
import { useSelector } from 'react-redux'
import store from '@/redux/store'

const AppliedJobTable = () => {
    const {allAppliedJobs} = useSelector(store=>store.job);
  return (
    <div>
        <Table>
            <TableCaption>A List of Your applied internships</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead>Company</TableHead>
                    <TableHead className="text-center">Status</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {
                    allAppliedJobs.length <= 0 ? <span>You haven't applied any internship yet.</span> : allAppliedJobs.map((appliedJob) =>(
                        <TableRow key={appliedJob._id}>
                            <TableCell>{appliedJob?.createdAt.split("T")[0]}</TableCell>
                            <TableCell>{appliedJob.job?.title}</TableCell>
                            <TableCell>{appliedJob.job?.company?.name}</TableCell>
                            <TableCell className="text-center"><Badge className={`${appliedJob?.status == "rejected" ? 'bg-red-400' : appliedJob.status == "pending" ? 'bg-gray-400' : 'bg-green-400'}`}>{appliedJob.status.toUpperCase()}</Badge></TableCell>
                        </TableRow>
                    ))
                    
                }
            </TableBody>
        </Table>
    </div>
  )
}

export default AppliedJobTable
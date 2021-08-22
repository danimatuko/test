import React, { useState } from "react";
import { Table } from "react-bootstrap";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useDispatch, useSelector } from "react-redux";

const Employees = () => {
	const { ids } = useSelector((state) => state.table);
	const dispatch = useDispatch();

	const handleOnDragEnd = (result) => {
		const items = Array.from(ids);
		const [reorderItem] = items.splice(result.source.index, 1);
		items.splice(result.destination.index, 0, reorderItem);

		dispatch({
			type: "DRAG",
			payload: items
		});
	};

	return (
		<DragDropContext onDragEnd={handleOnDragEnd}>
			<Droppable droppableId="abc">
				{(provided) => (
					<Table
						className="abc"
						striped
						bordered
						hover
						{...provided.droppableProps}
						ref={provided.innerRef}
					>
						<thead>
							<tr>
								<th>מספר ת.ז</th>
								<th>שם עובד</th>
								<th>שעות חריגות</th>
								<th>שעות ידניות</th>
								<th>שעות </th>
								<th>סך הכל שעות</th>
								<th>אפשרויות</th>
							</tr>
						</thead>
						<tbody>
							{ids.map((id, index) => (
								<Draggable key={id} draggableId={id} index={index}>
									{(provided) => (
										<tr
											id={id}
											{...provided.draggableProps}
											{...provided.dragHandleProps}
											ref={provided.innerRef}
										>
											<td>{id}</td>
											<td>יואב שרון</td>
											<td>4:00</td>
											<td>4:00</td>
											<td>155:00</td>
											<td>159:00</td>
											<td>
												<i className="fas fa-chart-bar"></i>
												<i className="fas fa-ellipsis-v"></i>
											</td>
										</tr>
									)}
								</Draggable>
							))}
						</tbody>
					</Table>
				)}
			</Droppable>
		</DragDropContext>
	);
};

export default Employees;

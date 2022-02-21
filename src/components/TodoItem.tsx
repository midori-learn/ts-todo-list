import React, { useState, useEffect, useRef } from "react";
import { Checkbox, Box, ButtonBase, InputBase } from "@material-ui/core";
import { handleDeleteTodo, handleUpdateTodo } from "../utils/handleCRUD";
import { Todo, status } from "../interfaces";
import { DeleteSharp } from "@material-ui/icons";
import CircleCheckedFilled from "@material-ui/icons/CheckCircle";
import CircleUnchecked from "@material-ui/icons/RadioButtonUnchecked";
import { todoItem } from "../styles/components";

type Props = {
  item: Todo,
  onClickDelete: Function,
  onClickUpdate: Function,
};

const TodoItem = ({ item,  onClickDelete, onClickUpdate }: Props) => {
  const styles = todoItem();
  const [isChecked, setIsChecked] = useState<boolean>(item.checked);
  const [newStatus, setNewStatus] = useState<string>(item.status);
  const [content, setContent] = useState<Todo>(item); // when modify title or note or deadline
  const [isDelete, setIsDelete] = useState<boolean>(false);

 const handleClick = () => {
		if (!isDelete
				&&(
					(isChecked !== item.checked)
					|| newStatus !== item.status)
					|| content !== item
					) {
			const newTodo = {
				...content,
				status: newStatus,
				checked: isChecked,
			};
			onClickUpdate(newTodo);
		}

		if (isDelete) onClickDelete(item.id);
  };

	useEffect(() => handleClick(),[isChecked, newStatus, isDelete, content]);
	const ref = useRef();

  return (
    <>
			<Box className={styles.container}>
				<Checkbox
					checked={item.checked}
					size="medium"
					icon={<CircleUnchecked />}
					checkedIcon={<CircleCheckedFilled />}
					onChange={() => {
						setIsChecked(!isChecked);
						!isChecked && setNewStatus(status.DONE);
						isChecked && setNewStatus(status.NOT_YET);
					}}
				/>
					<InputBase
							className={
								item.status !== status.DONE ? styles.title : styles.titleDoneState
							}
							value = {content.title}
							onChange = {(value) => setContent({...content, title:value.target.value})}
							ref = {ref}
					/>
					<InputBase
								className={
									item.status !== status.DONE ? styles.title : styles.titleDoneState
								}
								value = {content.note}
								onChange = {(value) => setContent({...content, note:value.target.value})}
								ref = {ref}
					/>
				{item.status === status.NOT_YET && (
					<ButtonBase
						className={styles.button_process}
						onClick={() => setNewStatus(status.PROCESS)}
					>
						Add in Process
					</ButtonBase>
				)}
				<ButtonBase
					onClick={() => setIsDelete(true)}
					className={styles.icon}
				>
					<DeleteSharp fontSize="small" />
				</ButtonBase>
			</Box>
    </>
  );
};

export default TodoItem;
